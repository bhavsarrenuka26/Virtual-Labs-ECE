import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../assets/assignment -bg.png';

export default function AdminDashboard() {
  const [labs, setLabs] = useState([]);
  const [subjects, setSubjects] = useState([]);


  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    demoVideoUrl: "",
    labManualLink: "",
    referenceLink: "",
    aim: "",
    theory: "",
  });


  const [editQuizQuestions, setEditQuizQuestions] = useState([]);
  const [editTempQuestion, setEditTempQuestion] = useState({
    questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0
  });
  const [showAddEditQuestion, setShowAddEditQuestion] = useState(false);


  const [newSubjectData, setNewSubjectData] = useState({
    name: "",
    year: "SE",
    semester: 3,
  });


  const [activeSubjectId, setActiveSubjectId] = useState(null);
  const [newLabData, setNewLabData] = useState({ title: "", aim: "", theory: "" });
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [tempQuestion, setTempQuestion] = useState({
    questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0
  });

  const navigate = useNavigate();

  const yearToSemesters = {
    SE: [3, 4],
    TE: [5, 6],
    BE: [7, 8]
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!token || !isAdmin) {
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      try {
        const [labRes, subRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/assignments`),
          fetch(`${import.meta.env.VITE_API_URL}/api/subjects`),
        ]);
        setLabs(await labRes.json());
        setSubjects(await subRes.json());
      } catch (err) {
        console.error("Data fetch error:", err);
      }
    };
    fetchData();
  }, [navigate]);

  const groupedLabs = subjects.map((subject) => ({
    ...subject,
    assignments: labs.filter((lab) => lab.subjectId === subject._id),
  }));

  //Add New Subject
  const handleAddSubject = async () => {
    if (!newSubjectData.name.trim()) return alert("Please enter a subject name");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/subjects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSubjectData),
      });
      if (res.ok) {
        const addedSubject = await res.json();
        setSubjects([...subjects, addedSubject]);
        setNewSubjectData({ name: "", year: "SE", semester: 3 });
      }
    } catch (err) {
      alert("Failed to add subject");
    }
  };

  //  Cancel Add Lab Form 
  const handleCancelAdd = () => {
    setActiveSubjectId(null);
    setNewLabData({ title: "", aim: "", theory: "" });
    setQuizQuestions([]);
    setTempQuestion({ questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0 });
  };

  //Add Question to New Lab Quiz
  const handleAddQuestionToList = () => {
    if (!tempQuestion.questionText || !tempQuestion.opt1 || !tempQuestion.opt2) {
      return alert("Please provide a question and at least 2 options.");
    }
    const formattedQuestion = {
      questionText: tempQuestion.questionText,
      options: [tempQuestion.opt1, tempQuestion.opt2, tempQuestion.opt3, tempQuestion.opt4].filter(o => o.trim() !== ""),
      correctAnswerIndex: Number(tempQuestion.correctIndex)
    };
    setQuizQuestions([...quizQuestions, formattedQuestion]);
    setTempQuestion({ questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0 });
  };

  //Save New Lab
  const handleAddLab = async (subjectId) => {
    if (!newLabData.title.trim()) return alert("Please enter an experiment title");
    const payload = {
      title: newLabData.title,
      subjectId,
      aim: newLabData.aim,
      theory: newLabData.theory,
      quiz: quizQuestions
    };
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/add-lab`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const addedLab = await res.json();
        setLabs([...labs, addedLab]);
        handleCancelAdd();
      } else {
        alert("Failed to add lab on the server.");
      }
    } catch (err) {
      alert("Failed to add lab due to network error.");
    }
  };

  //  Edit Form 
  const handleEditClick = (lab) => {
    setEditingId(lab._id);
    setEditForm({
      demoVideoUrl: lab.demoVideoUrl || "",
      labManualLink: lab.labManualLink || "",
      referenceLink: lab.references && lab.references.length > 0 ? lab.references[0].url : "",
      aim: lab.info?.aim || "",
      theory: lab.info?.theory || "",
    });
    // Load the existing quiz questions into editable state
    setEditQuizQuestions(lab.quiz ? lab.quiz.map(q => ({ ...q })) : []);
    setEditTempQuestion({ questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0 });
    setShowAddEditQuestion(false);
  };

  // Add Question to Existing Quiz 
  const handleAddEditQuestion = () => {
    if (!editTempQuestion.questionText || !editTempQuestion.opt1 || !editTempQuestion.opt2) {
      return alert("Please provide a question and at least 2 options.");
    }
    const newQ = {
      questionText: editTempQuestion.questionText,
      options: [editTempQuestion.opt1, editTempQuestion.opt2, editTempQuestion.opt3, editTempQuestion.opt4].filter(o => o.trim() !== ""),
      correctAnswerIndex: Number(editTempQuestion.correctIndex)
    };
    setEditQuizQuestions([...editQuizQuestions, newQ]);
    setEditTempQuestion({ questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0 });
    setShowAddEditQuestion(false);
  };

  //  Delete a Question from Existing Quiz
  const handleDeleteEditQuestion = (idx) => {
    setEditQuizQuestions(editQuizQuestions.filter((_, i) => i !== idx));
  };

  // Save Lab
  const handleSaveEdit = async (id) => {
    const token = localStorage.getItem("token");
    const payload = {
      demoVideoUrl: editForm.demoVideoUrl,
      labManualLink: editForm.labManualLink,
      info: {
        aim: editForm.aim,
        theory: editForm.theory
      },
      references: editForm.referenceLink ? [{ title: "Reference Material", url: editForm.referenceLink }] : [],
      quiz: editQuizQuestions,
    };
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        setLabs(labs.map((lab) => (lab._id === id ? data.lab : lab)));
        setEditingId(null);
        setEditQuizQuestions([]);
      }
    } catch (error) {
      alert("Update failed.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "900px",
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(255, 255, 254, 0.9)",
        backgroundBlendMode: "overlay",
      }}
    >
      <style>{`
        .btn-navy {
          background-color: #1a2238 !important;
          border-color: #1a2238 !important;
          color: #ffffff !important;
        }
        .btn-navy:hover {
          background-color: #253150 !important;
          border-color: #253150 !important;
          color: #ffffff !important;
        }
        .btn-outline-navy {
          background-color: transparent !important;
          border-color: #1a2238 !important;
          color: #1a2238 !important;
        }
        .btn-outline-navy:hover {
          background-color: #1a2238 !important;
          color: #ffffff !important;
        }
        .btn-dashed-navy {
          background-color: transparent !important;
          border-color: #1a2238 !important;
          border-style: dashed !important;
          color: #1a2238 !important;
        }
        .btn-dashed-navy:hover {
          background-color: #1a2238 !important;
          color: #ffffff !important;
        }
        .subject-header { transition: opacity 0.2s; }
        .subject-header:hover { opacity: 0.72; }
        .lab-card { transition: all 0.2s ease-in-out; }
        .lab-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,34,56,0.12) !important; background: #ffffff !important; }
        .quiz-question-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 14px; margin-bottom: 8px; }
        .quiz-question-item:last-child { margin-bottom: 0; }
        .delete-q-btn { background: transparent; border: 1px solid #fca5a5; color: #dc2626; border-radius: 6px; padding: 2px 8px; font-size: 12px; cursor: pointer; transition: all 0.15s; }
        .delete-q-btn:hover { background: #fef2f2; }
      `}</style>

      <div className="container mt-2 pt-3 mb-5 animation-fade-in">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold" style={{ color: "#102b51" }}>Content Management</h2>
        </div>

        {/* New Subject*/}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-5" style={{ backgroundColor: "#e2e8f0" }}>
          <h5 className="fw-bold mb-3 text-dark">➕ Create New Subject</h5>
          <div className="row g-2 align-items-center">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="e.g., Computer Networks Lab"
                value={newSubjectData.name}
                onChange={(e) => setNewSubjectData({ ...newSubjectData, name: e.target.value })}
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-select rounded-3"
                value={newSubjectData.year}
                onChange={(e) => {
                  const selectedYear = e.target.value;
                  setNewSubjectData({
                    ...newSubjectData,
                    year: selectedYear,
                    semester: yearToSemesters[selectedYear][0]
                  });
                }}
              >
                <option value="SE">Second Year (SE)</option>
                <option value="TE">Third Year (TE)</option>
                <option value="BE">Fourth Year (BE)</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select rounded-3"
                value={newSubjectData.semester}
                onChange={(e) => setNewSubjectData({ ...newSubjectData, semester: Number(e.target.value) })}
              >
                {yearToSemesters[newSubjectData.year].map((sem) => (
                  <option key={sem} value={sem}>Sem {sem}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-navy fw-bold w-100" onClick={handleAddSubject}>
                Create
              </button>
            </div>
          </div>
        </div>

        {/* Lab list */}
        {groupedLabs.map((subject) => (
          <div key={subject._id} className="mb-5 bg-white p-4 rounded-4 shadow-sm border">

            {/* Clickable subject header */}
            <div
              className="subject-header d-flex align-items-center gap-3 mb-4 border-bottom pb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/subject/${subject._id}/labs`)}
            >
              <div
                className="rounded-circle p-2 text-white d-flex align-items-center justify-content-center"
                style={{ backgroundColor: subject.color || "#102b51", width: "45px", height: "45px", flexShrink: 0 }}
              >
                {subject.icon || "📚"}
              </div>
              <h4 className="fw-bold m-0" style={{ color: "#102b51" }}>{subject.name}</h4>
              <span className="badge bg-light text-dark border">{subject.assignments.length} Labs</span>
            </div>


            <div className="row g-3 mb-3">
              {subject.assignments.map((lab) => (
                <div key={lab._id} className="col-12">
                  <div
                    className={`card border shadow-sm rounded-3 bg-light${editingId === lab._id ? "" : " lab-card"}`}
                    style={{ cursor: editingId === lab._id ? "default" : "pointer" }}
                    onClick={(e) => {
                      if (editingId === lab._id) return;
                      if (e.target.closest(".edit-zone")) return;
                      navigate(`/assignment/${lab._id}`);
                    }}
                  >
                    <div className="card-body py-3 px-4">
                      <div className="d-flex justify-content-between align-items-start gap-2 flex-wrap">
                        <span className="fw-bold text-dark" style={{ flex: 1, minWidth: 0 }}>
                          {lab.title}
                        </span>
                        {editingId !== lab._id && (
                          <button
                            className="btn btn-sm btn-outline-navy edit-zone flex-shrink-0"
                            onClick={(e) => { e.stopPropagation(); handleEditClick(lab); }}
                          >
                             Edit
                          </button>
                        )}
                      </div>


                      {editingId === lab._id && (
                        <div className="mt-3 edit-zone">


                          <div className="p-3 bg-white border rounded mb-3">
                            <p className="fw-bold text-dark mb-3" style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b" }}>Lab Content</p>
                            <div className="row">
                              <div className="col-md-4 mb-2">
                                <label className="small fw-bold">Video URL</label>
                                <input type="text" className="form-control form-control-sm" value={editForm.demoVideoUrl}
                                  onChange={(e) => setEditForm({ ...editForm, demoVideoUrl: e.target.value })} />
                              </div>
                              <div className="col-md-4 mb-2">
                                <label className="small fw-bold">Manual PDF</label>
                                <input type="text" className="form-control form-control-sm" value={editForm.labManualLink}
                                  onChange={(e) => setEditForm({ ...editForm, labManualLink: e.target.value })} />
                              </div>
                              <div className="col-md-4 mb-2">
                                <label className="small fw-bold">Reference Link</label>
                                <input type="text" className="form-control form-control-sm" value={editForm.referenceLink}
                                  onChange={(e) => setEditForm({ ...editForm, referenceLink: e.target.value })} />
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-12 mb-2">
                                <label className="small fw-bold">Experiment Aim</label>
                                <textarea className="form-control" rows="2" placeholder="Paste aim here..." value={editForm.aim}
                                  onChange={(e) => setEditForm({ ...editForm, aim: e.target.value })} />
                              </div>
                              <div className="col-12">
                                <label className="small fw-bold">Experiment Theory</label>
                                <textarea className="form-control" rows="4" placeholder="Paste theory here..." value={editForm.theory}
                                  onChange={(e) => setEditForm({ ...editForm, theory: e.target.value })} />
                              </div>
                            </div>
                          </div>

                          {/*  Quiz Edit  */}
                          <div className="p-3 bg-white border rounded mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <p className="fw-bold mb-0" style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b" }}>
                                Quiz Questions
                                <span className="ms-2 badge bg-light text-dark border">{editQuizQuestions.length} questions</span>
                              </p>
                              {!showAddEditQuestion && (
                                <button
                                  className="btn btn-sm btn-outline-navy fw-bold"
                                  onClick={() => setShowAddEditQuestion(true)}
                                >
                                  + Add Question
                                </button>
                              )}
                            </div>

                            {/* Existing questions list */}
                            {editQuizQuestions.length > 0 ? (
                              <div className="mb-3">
                                {editQuizQuestions.map((q, idx) => (
                                  <div key={idx} className="quiz-question-item">
                                    <div className="d-flex justify-content-between align-items-start gap-2">
                                      <div style={{ flex: 1 }}>
                                        <div className="fw-bold text-dark mb-1" style={{ fontSize: "13px" }}>
                                          Q{idx + 1}: {q.questionText}
                                        </div>
                                        <div className="d-flex flex-wrap gap-2 mt-1">
                                          {q.options.map((opt, oIdx) => (
                                            <span
                                              key={oIdx}
                                              className="badge"
                                              style={{
                                                fontSize: "11px",
                                                padding: "4px 8px",
                                                background: oIdx === q.correctAnswerIndex ? "#dcfce7" : "#f1f5f9",
                                                color: oIdx === q.correctAnswerIndex ? "#166534" : "#475569",
                                                border: oIdx === q.correctAnswerIndex ? "1px solid #bbf7d0" : "1px solid #e2e8f0",
                                                borderRadius: "6px",
                                                fontWeight: oIdx === q.correctAnswerIndex ? 600 : 400,
                                              }}
                                            >
                                              {oIdx === q.correctAnswerIndex && "✓ "}{opt}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                      <button className="delete-q-btn" onClick={() => handleDeleteEditQuestion(idx)}>
                                        ✕ Remove
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-muted fst-italic small mb-3">No questions yet. Add one below.</p>
                            )}

                            {/* Add new question */}
                            {showAddEditQuestion && (
                              <div className="p-3 rounded-3 mt-2" style={{ background: "#f8fafc", border: "1px dashed #cbd5e1" }}>
                                <p className="small fw-bold text-dark mb-2">New Question</p>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Type a question..."
                                    value={editTempQuestion.questionText}
                                    onChange={(e) => setEditTempQuestion({ ...editTempQuestion, questionText: e.target.value })}
                                    autoFocus
                                  />
                                </div>
                                <div className="row g-2 mb-2">
                                  <div className="col-md-3">
                                    <input type="text" className="form-control form-control-sm" placeholder="Option 1"
                                      value={editTempQuestion.opt1} onChange={(e) => setEditTempQuestion({ ...editTempQuestion, opt1: e.target.value })} />
                                  </div>
                                  <div className="col-md-3">
                                    <input type="text" className="form-control form-control-sm" placeholder="Option 2"
                                      value={editTempQuestion.opt2} onChange={(e) => setEditTempQuestion({ ...editTempQuestion, opt2: e.target.value })} />
                                  </div>
                                  <div className="col-md-3">
                                    <input type="text" className="form-control form-control-sm" placeholder="Option 3"
                                      value={editTempQuestion.opt3} onChange={(e) => setEditTempQuestion({ ...editTempQuestion, opt3: e.target.value })} />
                                  </div>
                                  <div className="col-md-3">
                                    <input type="text" className="form-control form-control-sm" placeholder="Option 4"
                                      value={editTempQuestion.opt4} onChange={(e) => setEditTempQuestion({ ...editTempQuestion, opt4: e.target.value })} />
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2 gap-2">
                                  <select
                                    className="form-select form-select-sm w-50"
                                    value={editTempQuestion.correctIndex}
                                    onChange={(e) => setEditTempQuestion({ ...editTempQuestion, correctIndex: e.target.value })}
                                  >
                                    <option value={0}>Option 1 is correct</option>
                                    <option value={1}>Option 2 is correct</option>
                                    <option value={2}>Option 3 is correct</option>
                                    <option value={3}>Option 4 is correct</option>
                                  </select>
                                  <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-navy fw-bold px-3" onClick={handleAddEditQuestion}>
                                      Save Question
                                    </button>
                                    <button className="btn btn-sm btn-light" onClick={() => setShowAddEditQuestion(false)}>
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Save / Cancel */}
                          <div className="d-flex gap-2">
                            <button className="btn btn-navy btn-sm px-4 fw-bold" onClick={() => handleSaveEdit(lab._id)}>
                              Save All Changes
                            </button>
                            <button className="btn btn-light btn-sm" onClick={() => setEditingId(null)}>
                              Cancel
                            </button>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {subject.assignments.length === 0 && (
                <p className="text-muted fst-italic ms-2">No experiments added to this subject yet.</p>
              )}
            </div>

            {/*  Add New Lab*/}
            {activeSubjectId === subject._id ? (
              <div
                className="mt-4 p-4 rounded-4 shadow-sm animation-fade-in"
                style={{ border: "2px dashed #cbd5e1", backgroundColor: "#f8fafc" }}
              >
                <h5 className="fw-bold mb-4" style={{ color: "#1a2238" }}>Create New Experiment</h5>

                <div className="mb-3">
                  <label className="small fw-bold text-dark mb-1">Experiment Title</label>
                  <input type="text" className="form-control" placeholder="e.g., Amplitude Modulation"
                    value={newLabData.title} onChange={(e) => setNewLabData({ ...newLabData, title: e.target.value })} autoFocus />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold text-dark mb-1">Experiment Aim</label>
                  <textarea className="form-control" rows="2" placeholder="e.g., To study and generate Amplitude Modulation..."
                    value={newLabData.aim} onChange={(e) => setNewLabData({ ...newLabData, aim: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="small fw-bold text-dark mb-1">Theory / Explanation</label>
                  <textarea className="form-control" rows="3" placeholder="Enter theory here..."
                    value={newLabData.theory} onChange={(e) => setNewLabData({ ...newLabData, theory: e.target.value })} />
                </div>

                <hr className="my-4 opacity-25" />
                <h6 className="fw-bold mb-3 text-dark">Build the Quiz</h6>

                {quizQuestions.length > 0 && (
                  <ul className="list-group shadow-sm mb-3">
                    {quizQuestions.map((q, idx) => (
                      <li key={idx} className="list-group-item bg-white border-0 border-bottom">
                        <strong>Q{idx + 1}:</strong> {q.questionText}<br />
                        <small className="text-success fw-bold">✓ Correct: {q.options[q.correctAnswerIndex]}</small>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="p-3 bg-white rounded-3 border">
                  <div className="mb-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Type a question..."
                      value={tempQuestion.questionText} onChange={(e) => setTempQuestion({ ...tempQuestion, questionText: e.target.value })} />
                  </div>
                  <div className="row g-2 mb-2">
                    <div className="col-md-3"><input type="text" className="form-control form-control-sm" placeholder="Option 1" value={tempQuestion.opt1} onChange={(e) => setTempQuestion({ ...tempQuestion, opt1: e.target.value })} /></div>
                    <div className="col-md-3"><input type="text" className="form-control form-control-sm" placeholder="Option 2" value={tempQuestion.opt2} onChange={(e) => setTempQuestion({ ...tempQuestion, opt2: e.target.value })} /></div>
                    <div className="col-md-3"><input type="text" className="form-control form-control-sm" placeholder="Option 3" value={tempQuestion.opt3} onChange={(e) => setTempQuestion({ ...tempQuestion, opt3: e.target.value })} /></div>
                    <div className="col-md-3"><input type="text" className="form-control form-control-sm" placeholder="Option 4" value={tempQuestion.opt4} onChange={(e) => setTempQuestion({ ...tempQuestion, opt4: e.target.value })} /></div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <select className="form-select form-select-sm w-50" value={tempQuestion.correctIndex}
                      onChange={(e) => setTempQuestion({ ...tempQuestion, correctIndex: e.target.value })}>
                      <option value={0}>Option 1 is correct</option>
                      <option value={1}>Option 2 is correct</option>
                      <option value={2}>Option 3 is correct</option>
                      <option value={3}>Option 4 is correct</option>
                    </select>
                    <button className="btn btn-sm btn-outline-navy fw-bold px-3" onClick={handleAddQuestionToList}>
                      + Add Question
                    </button>
                  </div>
                </div>

                <div className="d-flex gap-2 mt-4 pt-3 border-top">
                  <button className="btn btn-navy fw-bold px-4 shadow-sm" onClick={() => handleAddLab(subject._id)}>
                    Save Experiment & Quiz
                  </button>
                  <button className="btn btn-light" onClick={handleCancelAdd}>Cancel</button>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-sm btn-dashed-navy w-100 mt-2 py-2 fw-bold"
                onClick={() => setActiveSubjectId(subject._id)}
              >
                + Add New Experiment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}