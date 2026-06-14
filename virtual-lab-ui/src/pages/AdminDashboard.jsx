import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../assets/assignment -bg.png';

export default function AdminDashboard() {
  const [labs, setLabs] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const [confirmDelete, setConfirmDelete] = useState({ type: null, id: null, name: "" });

  const navigate = useNavigate();

  const yearToSemesters = {
    SE: [3, 4],
    TE: [5, 6],
    BE: [7, 8]
  };

 
  useEffect(() => {
    const verifySessionAndLoad = async () => {
      const token = localStorage.getItem("token");
      const isAdmin = localStorage.getItem("isAdmin") === "true";

      if (!token || !isAdmin) {
        navigate("/login");
        return;
      }

      // Verify token 
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("isAdmin");
          navigate("/login");
          return;
        }
      } catch (err) {
        console.error("Session check failed:", err);
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        navigate("/login");
        return;
      }

      // Token valid - fetch data
      try {
        const [labRes, subRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/assignments`),
          fetch(`${import.meta.env.VITE_API_URL}/api/assignments/subjects`),
        ]);
        setLabs(await labRes.json());
        setSubjects(await subRes.json());
      } catch (err) {
        console.error("Data fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    verifySessionAndLoad();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status" style={{ color: "#102b51" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const groupedLabs = subjects.map((subject) => ({
    ...subject,
    assignments: labs.filter((lab) => lab.subjectId === subject._id),
  }));

  // add new subject
  const handleAddSubject = async () => {
    if (!newSubjectData.name.trim()) return alert("Please enter a subject name");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/subjects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

  // delete subject
  const handleDeleteSubject = async (subjectId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/subjects/${subjectId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        navigate("/login");
        return;
      }

      if (res.ok) {
        setSubjects((prev) => prev.filter((s) => s._id !== subjectId));
        setLabs((prev) => prev.filter((l) => l.subjectId !== subjectId));
      } else {
        const errData = await res.json().catch(() => ({}));
        alert(errData.message || "Failed to delete subject.");
      }
    } catch (err) {
      console.error("Delete subject error:", err);
      alert("Network error deleting subject.");
    } finally {
      setConfirmDelete({ type: null, id: null, name: "" });
    }
  };

  // delete lab
  const handleDeleteLab = async (labId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/${labId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        navigate("/login");
        return;
      }

      if (res.ok) {
        setLabs((prev) => prev.filter((l) => l._id !== labId));
      } else {
        alert("Failed to delete lab.");
      }
    } catch (err) {
      alert("Network error deleting lab.");
    } finally {
      setConfirmDelete({ type: null, id: null, name: "" });
    }
  };

  // Cancel Add Lab Form
  const handleCancelAdd = () => {
    setActiveSubjectId(null);
    setNewLabData({ title: "", aim: "", theory: "" });
    setQuizQuestions([]);
    setTempQuestion({ questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0 });
  };

  // add questions to quiz
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

  // save new lab
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
          Authorization: `Bearer ${localStorage.getItem('token')}`
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

  // edit lab
  const handleEditClick = (lab) => {
    setEditingId(lab._id);
    setEditForm({
      demoVideoUrl: lab.demoVideoUrl || "",
      labManualLink: lab.labManualLink || "",
      referenceLink: lab.references && lab.references.length > 0 ? lab.references[0].url : "",
      aim: lab.info?.aim || "",
      theory: lab.info?.theory || "",
    });
    setEditQuizQuestions(lab.quiz ? lab.quiz.map(q => ({ ...q })) : []);
    setEditTempQuestion({ questionText: "", opt1: "", opt2: "", opt3: "", opt4: "", correctIndex: 0 });
    setShowAddEditQuestion(false);
  };

  // add more quesions in quiz
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

  //delete que from quiz
  const handleDeleteEditQuestion = (idx) => {
    setEditQuizQuestions(editQuizQuestions.filter((_, i) => i !== idx));
  };

  // save lab - edited
  const handleSaveEdit = async (id) => {
    const token = localStorage.getItem("token");
    const payload = {
      demoVideoUrl: editForm.demoVideoUrl,
      labManualLink: editForm.labManualLink,
      info: { aim: editForm.aim, theory: editForm.theory },
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
        .subject-header { transition: opacity 0.2s; cursor: pointer; }
        .subject-header:hover { opacity: 0.72; }
        .lab-card { transition: all 0.2s ease-in-out; }
        .lab-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,34,56,0.12) !important; background: #ffffff !important; }
        .quiz-question-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 14px; margin-bottom: 8px; }
        .quiz-question-item:last-child { margin-bottom: 0; }
        .delete-q-btn { background: transparent; border: 1px solid #fca5a5; color: #dc2626; border-radius: 6px; padding: 2px 8px; font-size: 12px; cursor: pointer; transition: all 0.15s; white-space: nowrap; }
        .delete-q-btn:hover { background: #fef2f2; }
        .btn-delete-sm { background: transparent; border: 1px solid #fca5a5; color: #dc2626; border-radius: 6px; padding: 3px 10px; font-size: 12px; cursor: pointer; transition: all 0.15s; white-space: nowrap; }
        .btn-delete-sm:hover { background: #fef2f2; }
        .confirm-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 1050; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .confirm-box { background: white; border-radius: 16px; padding: 1.75rem; max-width: 380px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
      `}</style>

      {/* ── Delete Confirmation Modal ── */}
      {confirmDelete.type && (
        <div className="confirm-overlay" onClick={() => setConfirmDelete({ type: null, id: null, name: "" })}>
          <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
            <h5 className="fw-bold mb-2" style={{ color: "#102b51" }}>
              {confirmDelete.type === "subject" ? "Delete Subject?" : "Delete Experiment?"}
            </h5>
            <p className="text-secondary mb-4" style={{ fontSize: "14px" }}>
              Are you sure you want to delete <strong>{confirmDelete.name}</strong>?
              {confirmDelete.type === "subject" && " This will also delete all its experiments."}
              {" "}This action cannot be undone.
            </p>
            <div className="d-flex gap-2 justify-content-end">
              <button
                className="btn btn-light btn-sm px-4"
                onClick={() => setConfirmDelete({ type: null, id: null, name: "" })}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm px-4 fw-bold"
                style={{ backgroundColor: "#dc2626", borderColor: "#dc2626", color: "white" }}
                onClick={() =>
                  confirmDelete.type === "subject"
                    ? handleDeleteSubject(confirmDelete.id)
                    : handleDeleteLab(confirmDelete.id)
                }
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-2 pt-3 mb-5 animation-fade-in">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold" style={{ color: "#102b51" }}>Content Management</h2>
        </div>

        {/* ── Create New Subject ── */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-5" style={{ backgroundColor: "#e2e8f0" }}>
          <h5 className="fw-bold mb-3 text-dark">➕ Create New Subject</h5>
          <div className="row g-2 align-items-end">
            <div className="col-12 col-md-5">
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="e.g., Computer Networks Lab"
                value={newSubjectData.name}
                onChange={(e) => setNewSubjectData({ ...newSubjectData, name: e.target.value })}
              />
            </div>
            <div className="col-6 col-md-3">
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
            <div className="col-6 col-md-2">
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
            <div className="col-12 col-md-2">
              <button className="btn btn-navy fw-bold w-100" onClick={handleAddSubject}>
                Create
              </button>
            </div>
          </div>
        </div>

        {/*Lab List */}
        {groupedLabs.map((subject) => (
          <div key={subject._id} className="mb-5 bg-white p-3 p-md-4 rounded-4 shadow-sm border">

           
            <div className="d-flex align-items-center gap-2 gap-md-3 mb-4 border-bottom pb-3 flex-wrap">
              <div
                className="subject-header d-flex align-items-center gap-2 gap-md-3 flex-grow-1 flex-wrap"
                onClick={() => navigate(`/subject/${subject._id}/labs`)}
              >
                <div
                  className="rounded-circle p-2 text-white d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ backgroundColor: subject.color || "#102b51", width: "42px", height: "42px" }}
                >
                  {subject.icon || "📚"}
                </div>
                <h5 className="fw-bold m-0" style={{ color: "#102b51" }}>{subject.name}</h5>
                <span className="badge bg-light text-dark border">{subject.assignments.length} Labs</span>
              </div>

              <button
                className="btn-delete-sm flex-shrink-0"
                onClick={() => setConfirmDelete({ type: "subject", id: subject._id, name: subject.name })}
              >
                Delete Subject
              </button>
            </div>

            {/* Lab cards */}
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
                    <div className="card-body py-3 px-3 px-md-4">

                      <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <span className="fw-bold text-dark" style={{ flex: 1, minWidth: 0 }}>
                          {lab.title}
                        </span>
                        {editingId !== lab._id && (
                          <div className="d-flex gap-2 flex-shrink-0 edit-zone">
                            <button
                              className="btn btn-sm btn-outline-navy"
                              onClick={(e) => { e.stopPropagation(); handleEditClick(lab); }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn-delete-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setConfirmDelete({ type: "lab", id: lab._id, name: lab.title });
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Edit  lab */}
                      {editingId === lab._id && (
                        <div className="mt-3 edit-zone">
                          <div className="p-3 bg-white border rounded mb-3">
                            <p className="fw-bold mb-3 text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.05em", color: "#64748b" }}>
                              Lab Content
                            </p>
                            <div className="row g-2">
                              <div className="col-12 col-md-4">
                                <label className="small fw-bold">Video URL</label>
                                <input type="text" className="form-control form-control-sm" value={editForm.demoVideoUrl}
                                  onChange={(e) => setEditForm({ ...editForm, demoVideoUrl: e.target.value })} />
                              </div>
                              <div className="col-12 col-md-4">
                                <label className="small fw-bold">Manual PDF</label>
                                <input type="text" className="form-control form-control-sm" value={editForm.labManualLink}
                                  onChange={(e) => setEditForm({ ...editForm, labManualLink: e.target.value })} />
                              </div>
                              <div className="col-12 col-md-4">
                                <label className="small fw-bold">Reference Link</label>
                                <input type="text" className="form-control form-control-sm" value={editForm.referenceLink}
                                  onChange={(e) => setEditForm({ ...editForm, referenceLink: e.target.value })} />
                              </div>
                              <div className="col-12">
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

                          {/* Quiz modify */}
                          <div className="p-3 bg-white border rounded mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                              <p className="fw-bold mb-0 text-uppercase" style={{ fontSize: "12px", letterSpacing: "0.05em", color: "#64748b" }}>
                                Quiz Questions
                                <span className="ms-2 badge bg-light text-dark border">{editQuizQuestions.length}</span>
                              </p>
                              {!showAddEditQuestion && (
                                <button className="btn btn-sm btn-outline-navy fw-bold" onClick={() => setShowAddEditQuestion(true)}>
                                  + Add Question
                                </button>
                              )}
                            </div>

                            {editQuizQuestions.length > 0 ? (
                              <div className="mb-3">
                                {editQuizQuestions.map((q, idx) => (
                                  <div key={idx} className="quiz-question-item">
                                    <div className="d-flex justify-content-between align-items-start gap-2">
                                      <div style={{ flex: 1, minWidth: 0 }}>
                                        <div className="fw-bold text-dark mb-1" style={{ fontSize: "13px" }}>
                                          Q{idx + 1}: {q.questionText}
                                        </div>
                                        <div className="d-flex flex-wrap gap-2 mt-1">
                                          {q.options.map((opt, oIdx) => (
                                            <span
                                              key={oIdx}
                                              className="badge rounded-2"
                                              style={{
                                                fontSize: "11px",
                                                padding: "4px 8px",
                                                background: oIdx === q.correctAnswerIndex ? "#dcfce7" : "#f1f5f9",
                                                color: oIdx === q.correctAnswerIndex ? "#166534" : "#475569",
                                                border: oIdx === q.correctAnswerIndex ? "1px solid #bbf7d0" : "1px solid #e2e8f0",
                                                fontWeight: oIdx === q.correctAnswerIndex ? 600 : 400,
                                              }}
                                            >
                                              {oIdx === q.correctAnswerIndex && "✓ "}{opt}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                      <button className="delete-q-btn flex-shrink-0" onClick={() => handleDeleteEditQuestion(idx)}>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-muted fst-italic small mb-3">No questions yet.</p>
                            )}

                            {showAddEditQuestion && (
                              <div className="p-3 rounded-3 mt-2" style={{ background: "#f8fafc", border: "1px dashed #cbd5e1" }}>
                                <p className="small fw-bold text-dark mb-2">New Question</p>
                                <div className="mb-2">
                                  <input type="text" className="form-control form-control-sm" placeholder="Type a question..."
                                    value={editTempQuestion.questionText} autoFocus
                                    onChange={(e) => setEditTempQuestion({ ...editTempQuestion, questionText: e.target.value })} />
                                </div>
                                <div className="row g-2 mb-2">
                                  {["opt1", "opt2", "opt3", "opt4"].map((opt, i) => (
                                    <div className="col-6 col-md-3" key={opt}>
                                      <input type="text" className="form-control form-control-sm" placeholder={`Option ${i + 1}`}
                                        value={editTempQuestion[opt]}
                                        onChange={(e) => setEditTempQuestion({ ...editTempQuestion, [opt]: e.target.value })} />
                                    </div>
                                  ))}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2 gap-2 flex-wrap">
                                  <select className="form-select form-select-sm" style={{ maxWidth: "220px" }}
                                    value={editTempQuestion.correctIndex}
                                    onChange={(e) => setEditTempQuestion({ ...editTempQuestion, correctIndex: e.target.value })}>
                                    <option value={0}>Option 1 is correct</option>
                                    <option value={1}>Option 2 is correct</option>
                                    <option value={2}>Option 3 is correct</option>
                                    <option value={3}>Option 4 is correct</option>
                                  </select>
                                  <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-navy fw-bold px-3" onClick={handleAddEditQuestion}>Save Question</button>
                                    <button className="btn btn-sm btn-light" onClick={() => setShowAddEditQuestion(false)}>Cancel</button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="d-flex gap-2 flex-wrap">
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

            {/* Add New Lab */}
            {activeSubjectId === subject._id ? (
              <div className="mt-4 p-3 p-md-4 rounded-4 shadow-sm animation-fade-in"
                style={{ border: "2px dashed #cbd5e1", backgroundColor: "#f8fafc" }}>
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
                    {["opt1", "opt2", "opt3", "opt4"].map((opt, i) => (
                      <div className="col-6 col-md-3" key={opt}>
                        <input type="text" className="form-control form-control-sm" placeholder={`Option ${i + 1}`}
                          value={tempQuestion[opt]} onChange={(e) => setTempQuestion({ ...tempQuestion, [opt]: e.target.value })} />
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                    <select className="form-select form-select-sm" style={{ maxWidth: "220px" }}
                      value={tempQuestion.correctIndex} onChange={(e) => setTempQuestion({ ...tempQuestion, correctIndex: e.target.value })}>
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

                <div className="d-flex gap-2 mt-4 pt-3 border-top flex-wrap">
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