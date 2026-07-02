import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bgImage from "../assets/bg-assignment.jpg";


const tabs = [
  "Info",
  "Demo",
  "Quiz",
  "Try Yourself",
  "Reference",
  "Lab Manual",
];
// const COURSE_REFERENCE_BOOK =
//   "https://drive.google.com/drive/folders/1iBYSg_obCsQV6Kgz89Z2xygs1mo9boE6";

const AssignmentDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Info");

  const [labData, setLabData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Quiz States
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

 useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/assignments/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
       
        setLabData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [id]);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const calculateScore = async () => {
   
    let calculatedScore = 0;
    labData.quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswerIndex) {
        calculatedScore += 1;
      }
    });

  
    setScore(calculatedScore);
    setShowResult(true);

    const token = localStorage.getItem("token");

    if (!token) {
      console.error(" SCORE NOT SAVED: No VIP token found in the browser!");
      return;
    }

    try {
      console.log(`Sending Score: ${calculatedScore}/${labData.quiz.length} for Lab ${labData.title}...`);

    
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/submit-quiz`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({
          assignmentId: labData._id,
         
          subjectId: labData.subjectId, 
          score: calculatedScore
        }),
      });

      const data = await response.json();

     
      if (!response.ok) {
        console.error(" BACKEND REJECTED SCORE:", data.message);
        alert("Failed to submit score: " + data.message);
      } else {
        console.log(" SUCCESS:", data.message);
        
      
        alert(data.message); 
      }
    } catch (error) {
      console.error(" NETWORK ERROR: Could not reach the backend server.", error);
      alert("Network error: Could not reach the server.");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-5 mt-5">
        <h4>Loading Lab Data...</h4>
      </div>
    );
  }

  if (!labData) {
    return (
      <div className="text-center py-5 mt-5">
        <h4>Assignment not found in database..</h4>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Info":
        return (
          <div>
            <h3 className="mb-4" style={{ color: "#102b51" }}>
              {labData.title}
            </h3>
            <h5 className="fw-bold text-secondary">Aim:</h5>
            <p className="mb-4">{labData.info.aim}</p>
            <h5 className="fw-bold text-secondary">Theory:</h5>
            <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.8" }}>
              {labData.info.theory}
            </p>
          </div>
        );

      case "Demo":
        return (
          <div className="text-center py-5">
  <div className="mb-4">
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="#102b51"
      className="bi bi-play-circle-fill mb-3"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
    </svg>
    
    <h3 className="fw-bold" style={{ color: "#102b51" }}>
       Demonstration Video
    </h3>
    <p className="lead text-secondary mt-2">
      Watch the step-by-step practical demonstration.
    </p>
  </div>

  
  {labData.demoVideoUrl ? (
    <a
      href={labData.demoVideoUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-lg fw-bold px-5 py-3 shadow mt-3"
      style={{
        backgroundColor: "#102b51",
        color: "white",
        borderRadius: "8px",
      }}
    >
       Watch Video
    </a>
  ) : (
    <button
      disabled
      className="btn btn-lg fw-bold px-5 py-3 shadow mt-3 btn-secondary"
      style={{ borderRadius: "8px" }}
    >
       Video Coming Soon
    </button>
  )}
</div>
        );

      case "Quiz":
       
        const token = localStorage.getItem("token");

        if (!token) {
          return (
            <div className="text-center py-5">
              <h2 className="mb-4 text-danger"> Access Denied</h2>
              <p className="lead mb-4">
                You must be logged in to take the lab quizzes and record your
                score.
              </p>
              <a
                href="/login"
                className="btn btn-lg fw-bold"
                style={{ backgroundColor: "#102b51", color: "white" }}
              >
                Log In to Continue
              </a>
            </div>
          );
        }

        return (
          <div>
            <h4 className="mb-4">Test Your Knowledge</h4>
            {labData.quiz.map((q, index) => (
              <div
                key={index}
                className="w-100 mb-4 p-3 p-md-4 bg-white rounded shadow-sm border"
              >
                <p className="fw-bold fs-5">
                  {index + 1}. {q.questionText}
                </p>
                <div className="ms-3 mt-3">
                  {q.options.map((opt, i) => {
                    let textColor = "text-dark";
                    if (showResult) {
                      if (i === q.correctAnswerIndex) {
                        textColor = "text-success fw-bold";
                      } else if (
                        selectedAnswers[index] === i &&
                        i !== q.correctAnswerIndex
                      ) {
                        textColor = "text-danger text-decoration-line-through";
                      }
                    }

                    return (
                      <div className="form-check mb-3" key={i}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name={`question-${index}`}
                          id={`q${index}-opt${i}`}
                          checked={selectedAnswers[index] === i}
                          onChange={() => handleOptionSelect(index, i)}
                          disabled={showResult}
                          style={{
                            cursor: showResult ? "not-allowed" : "pointer",
                          }}
                        />
                        <label
                          className={`form-check-label ${textColor}`}
                          htmlFor={`q${index}-opt${i}`}
                          style={{
                            cursor: showResult ? "not-allowed" : "pointer",
                            fontSize: "1.1rem",
                          }}
                        >
                          {opt}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="mt-5 text-center">
              {!showResult ? (
                <button
                  className="btn btn-lg px-5 py-2 shadow"
                  style={{
                    backgroundColor: "#102b51",
                    color: "white",
                    border: "none",
                  }}
                  onClick={calculateScore}
                  disabled={
                    Object.keys(selectedAnswers).length < labData.quiz.length
                  }
                >
                  Submit Answers
                </button>
              ) : (
                <div className="p-5 bg-light rounded-4 border shadow-sm">
                  <h2 className="mb-3">Quiz Complete!</h2>
                  <h1
                    className={
                      score >= labData.quiz.length / 2
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    You Scored: {score} / {labData.quiz.length}
                  </h1>

                  <div className="alert alert-success mt-4 d-inline-block fw-bold shadow-sm">
                     Your score has been securely saved to your report card.
                  </div>
                </div>
              )}
            </div>
          </div>
        );

     case "Try Yourself":
  const hasSimulatorLink = labData.tryYourself && labData.tryYourself.link;

  return (
    <div className="text-center py-5 animation-fade-in">
      <h4 className="mb-3 fw-bold" style={{ color: "#102b51" }}>
        Virtual Environment
      </h4>

      {hasSimulatorLink ? (
        <>
          <p className="mb-4 text-secondary lead">
            Ready to test your knowledge? Click below to launch the online simulator or compiler.
          </p>
          <a
            href={labData.tryYourself.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg px-5 shadow-sm hover-lift fw-bold"
            style={{ backgroundColor: "#102b51", color: "white", borderRadius: "8px" }}
          >
            Launch Virtual Tool 
          </a>
        </>
      ) : (
        <div 
          className="alert alert-warning d-inline-block text-start text-dark border-warning shadow-sm rounded-4 p-4 mt-3" 
          style={{ backgroundColor: "#fffbeb", maxWidth: "600px" }}
        >
         
          <p className="mb-0 text-secondary" style={{ lineHeight: "1.6" }}>
           Virtual Lab tool is not available!!!
          </p>
        </div>
      )}
    </div>
  );
     case "Reference":
    // 1. Search the array specifically for the Drive link
    const driveReference = labData.references?.find(ref => 
      ref.url.includes("drive.google.com")
    );
    
    // 2. Set the link, or fallback to "#" if it doesn't exist
    const mainLibraryLink = driveReference ? driveReference.url : "#";

    return (
      <div className="animation-fade-in">
        <h4 className="mb-4 fw-bold" style={{ color: "#102b51" }}>
          Study Resources
        </h4>

        <div
          className="card border-0 rounded-4 p-4 mb-4 shadow-sm"
          style={{ backgroundColor: "#e2e8f0" }}
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div>
              <h5 className="fw-bold mb-1" style={{ color: "#0f172a" }}>
                Course Reference Library
              </h5>
              <p className="text-secondary mb-0">
                Official textbooks and folders recommended for this subject.
              </p>
            </div>

            {mainLibraryLink !== "#" ? (
              <a
                href={mainLibraryLink}
                target="_blank"
                rel="noreferrer"
                className="btn fw-bold px-4 shadow-sm"
                style={{ backgroundColor: "#102b51", color: "white" }}
              >
                Open Library Folder
              </a>
            ) : (
              <button className="btn btn-secondary fw-bold px-4 shadow-sm" disabled>
                Library Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    );
      case "Lab Manual":
        return (
          <div className="text-center py-5">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="#102b51"
                className="bi bi-file-earmark-pdf-fill mb-3"
                viewBox="0 0 16 16"
              >
                <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572q-.288.12-.497-.003c-.153-.089-.257-.245-.257-.436 0-.306.21-.635.62-.924m2.451-8.528q-.021-.06-.051-.122c-.066-.134-.143-.277-.24-.41-.21-.29-.44-.45-.63-.45-.18 0-.29.13-.34.34-.05.21-.08.43-.08.66 0 .37.04.75.12 1.13.06.26.15.54.26.83.36-.61.7-1.28 1.05-1.99M9.36 10.61c-.04.09-.08.18-.14.28-.15.26-.35.5-.55.72a50 50 0 0 0-.8-1.57c-.12-.22-.24-.44-.36-.66.36-.04.72-.08 1.08-.12.37-.04.73-.08 1.09-.13l-.32.48zM10.15 9.07c.36.03.7.07 1.04.1.28.03.55.07.82.1.25.04.48.11.66.2.19.1.34.23.44.38.1.15.15.31.15.48 0 .21-.08.41-.24.57-.16.15-.36.27-.6.34-.23.07-.5.1-.79.1-.3 0-.61-.03-.92-.09-.32-.06-.64-.15-.96-.26-.14-.04-.28-.09-.42-.15.19-.34.36-.69.52-1.04.16-.36.31-.72.44-1.09a25 25 0 0 1 .86-1.53c.27-.44.53-.84.77-1.2.24-.37.47-.69.67-.97.2-.28.37-.5.5-.68s.22-.3.26-.34c-.03.02-.06.05-.1.08a8 8 0 0 0-.27.27c-.09.1-.2.23-.33.38-.13.16-.28.35-.45.58-.17.23-.36.5-.57.81-.22.3-.46.64-.73 1.02-.27.38-.55.8-.84 1.25zM14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M5.9 12.35c.16.03.34.03.54.02.2-.02.42-.04.65-.08.23-.04.48-.09.73-.15.26-.06.52-.14.79-.23.28-.09.55-.19.82-.3.28-.11.55-.24.81-.39a6 6 0 0 0 .73-.48 5 5 0 0 0 .61-.55 4 4 0 0 0 .46-.59 3 3 0 0 0 .28-.6c.07-.2.1-.38.1-.55 0-.17-.03-.33-.08-.47-.06-.15-.14-.28-.24-.4-.11-.11-.23-.21-.37-.29-.14-.08-.3-.14-.48-.19-.17-.04-.36-.07-.56-.09-.2-.02-.42-.02-.64-.02h-.42c-.14 0-.28.01-.42.02a6 6 0 0 0-.41.05c-.13.02-.26.04-.39.07-.13.03-.25.06-.37.1l-.18.05c-.06.02-.12.04-.18.06-.24.3-.47.61-.7 1-.22.38-.44.8-.65 1.25-.21.46-.4 1-.58 1.6-.18.59-.34 1.25-.49 1.98-.15.73-.28 1.54-.39 2.45l-.11.96c-.04.33-.07.66-.09 1h-.25c0-.34.03-.67.09-1 .06-.33.14-.65.23-.96a21 21 0 0 1 .49-1.98 22 22 0 0 1 .58-1.6c.21-.45.43-.87.65-1.25.23-.39.46-.7.7-1zm-1.07-5.91a4 4 0 0 1-.21-1.39c0-.28.02-.56.08-.85.06-.29.14-.57.26-.84.11-.27.26-.52.44-.76.18-.23.4-.44.66-.62.25-.18.54-.33.87-.45.33-.12.7-.2 1.1-.25.4-.04.84-.04 1.3 0 .46.04.9.12 1.3.25.4.12.77.27 1.1.45.33.18.62.39.87.62.26.24.48.49.66.76.18.27.33.55.44.84.12.29.2.57.26.85.06.28.08.56.08.85 0 .47-.07.92-.21 1.39h-10z" />
              </svg>
              <h3 className="fw-bold" style={{ color: "#102b51" }}>
                Official Lab Manual
              </h3>
              <p className="lead text-secondary mt-2">
                Download the complete lab manual for detailed step-by-step
                instructions, expected outputs, and submission guidelines.
              </p>
            </div>

           
            {labData.labManualLink ? (
              <a
                href={labData.labManualLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg fw-bold px-5 py-3 shadow mt-3"
                style={{
                  backgroundColor: "#102b51",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                Download Lab Manual from Drive
              </a>
            ) : (
              <button
                disabled
                className="btn btn-lg fw-bold px-5 py-3 shadow mt-3 btn-secondary"
                style={{ borderRadius: "8px" }}
              >
                 Manual Coming Soon..
              </button>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
     <div
             style={{
               backgroundImage: `url(${bgImage})`,
               backgroundSize: "600px",
               backgroundRepeat: "repeat",
               backgroundPosition: "top left",
               width: "100%",
               minHeight: "100vh",
               backgroundColor: "rgba(250, 253, 250, 0.8)",
               backgroundBlendMode: "overlay",
             }}
           >
      <div style={{ backgroundColor: "#102b51" }} className="shadow-sm px-2">
        <div className="container d-flex justify-content-center flex-wrap gap-2 gap-md-4 py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? "#fef3c7" : "transparent",
                color: activeTab === tab ? "#0f172a" : "#ffffff",
                border: activeTab === tab ? "none" : "1px solid #ffffff",
                fontWeight: activeTab === tab ? "bold" : "normal",
                padding: "8px 20px",
                borderRadius: "4px",
                transition: "all 0.2s ease-in-out",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <div
          className="card border-0 rounded-4"
          style={{
            minHeight: "400px",
            backgroundColor: "#f3f4f6",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="card-body p-2 p-md-5">{renderTabContent()}</div>
        </div>

        <div style={{ height: "20vh" }}></div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
