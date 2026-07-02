import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Subjects = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const [selectedYear, setSelectedYear] = useState("SE");
  const [selectedSemester, setSelectedSemester] = useState(3);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        
        const subRes = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/subjects`);
        const subData = await subRes.json();
        setSubjects(subData);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (year === "SE") setSelectedSemester(3);
    if (year === "TE") setSelectedSemester(5);
    if (year === "BE") setSelectedSemester(7);
  };

  const handleCardClick = (subject) => {
      navigate(`/subject/${subject._id}/labs`);
  };

  const filteredSubjects = subjects.filter(
    (subject) => subject.year === selectedYear && subject.semester === selectedSemester
  );

  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div
          className="spinner-border text-primary mb-3"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h4 className="fw-bold">Loading Your Labs</h4>
        <p className="text-muted">Please wait while we prepare everything for you...</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          zIndex: -10,
          backgroundColor: "#eef3fb",
          backgroundImage:
            "radial-gradient(60% 120% at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(140,170,220,0.45) 100%)",
          transform: "rotate(180deg)"
        }}
      ></div>

      <div className="container mt-5 pt-3 pb-5 animation-fade-in">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#102b51" }}>Welcome to ECE Virtual Labs</h1>
          <p className="lead text-secondary">Select your academic year and semester to find your virtual labs.</p>
        </div>

        <div className="card border-0 shadow-sm rounded-4 p-4 mb-5" style={{
          backgroundColor: "#f3f7fd",
          backgroundImage:
            "radial-gradient(60% 120% at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(155,185,230,0.6) 100%)",
        }}>

          
          <div className="mb-4 text-center">
            <h6 className="text-muted fw-bold mb-3 text-uppercase">1. Select Academic Year</h6>
            <div className="btn-group shadow-sm flex-wrap" role="group">
              <button
                type="button"
                className={`btn px-4 py-2 fw-bold ${selectedYear === "SE" ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => handleYearChange("SE")}
              >
                Second Year (SE)
              </button>
              <button
                type="button"
                className={`btn px-4 py-2 fw-bold ${selectedYear === "TE" ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => handleYearChange("TE")}
              >
                Third Year (TE)
              </button>
              <button
                type="button"
                className={`btn px-4 py-2 fw-bold ${selectedYear === "BE" ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => handleYearChange("BE")}
              >
                Fourth Year (BE)
              </button>
            </div>
          </div>

          <hr className="text-muted opacity-25" />

         
          <div className="mt-4 text-center">
            <h6 className="text-muted fw-bold mb-3 text-uppercase">2. Select Semester</h6>
            <div className="d-flex justify-content-center gap-3 flex-wrap">

              {selectedYear === "SE" && (
                <>
                  <button
                    className={`btn rounded-pill px-4 fw-bold ${selectedSemester === 3 ? "text-light shadow border-0" : "btn-light border"}`}
                    style={selectedSemester === 3 ? { backgroundColor: "#1a2238" } : {}}
                    onClick={() => setSelectedSemester(3)}
                  >
                    Semester 3
                  </button>
                  <button
                    className={`btn rounded-pill px-4 fw-bold ${selectedSemester === 4 ? "text-light shadow border-0" : "btn-light border"}`}
                    style={selectedSemester === 4 ? { backgroundColor: "#1a2238" } : {}}
                    onClick={() => setSelectedSemester(4)}
                  >
                    Semester 4
                  </button>
                </>
              )}

              {selectedYear === "TE" && (
                <>
                  <button
                    className={`btn rounded-pill px-4 fw-bold ${selectedSemester === 5 ? "text-light shadow border-0" : "btn-light border"}`}
                    style={selectedSemester === 5 ? { backgroundColor: "#1a2238" } : {}}
                    onClick={() => setSelectedSemester(5)}
                  >
                    Semester 5
                  </button>
                  <button
                    className={`btn rounded-pill px-4 fw-bold ${selectedSemester === 6 ? "text-light shadow border-0" : "btn-light border"}`}
                    style={selectedSemester === 6 ? { backgroundColor: "#1a2238" } : {}}
                    onClick={() => setSelectedSemester(6)}
                  >
                    Semester 6
                  </button>
                </>
              )}

              {selectedYear === "BE" && (
                <>
                  <button
                    className={`btn rounded-pill px-4 fw-bold ${selectedSemester === 7 ? "text-light shadow border-0" : "btn-light border"}`}
                    style={selectedSemester === 7 ? { backgroundColor: "#1a2238" } : {}}
                    onClick={() => setSelectedSemester(7)}
                  >
                    Semester 7
                  </button>
                  <button
                    className={`btn rounded-pill px-4 fw-bold ${selectedSemester === 8 ? "text-light shadow border-0" : "btn-light border"}`}
                    style={selectedSemester === 8 ? { backgroundColor: "#1a2238" } : {}}
                    onClick={() => setSelectedSemester(8)}
                  >
                    Semester 8
                  </button>
                </>
              )}

            </div>
          </div>
        </div>

        <h4 className="fw-bold mb-4" style={{ color: "#102b51" }}>
          Available Subjects ({filteredSubjects.length})
        </h4>

        <div className="row g-4">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex" key={subject._id}>
                <div
                  className="card border-0 shadow-sm w-100 rounded-4 overflow-hidden"
                  style={{ cursor: "pointer", transition: "transform 0.2s" }}
                  onClick={() => handleCardClick(subject)}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                >
                  <div
                    className="card-header border-0 py-4 text-center text-white"
                    style={{ backgroundColor: subject.color || "#102b51" }}
                  >
                    <div style={{ fontSize: "3rem" }}>{subject.icon || "📚"}</div>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-end mb-2">
                      <span className="badge bg-light text-dark border">Sem {subject.semester}</span>
                    </div>
                    <h4 className="fw-bold mb-3 mt-2" style={{ color: "#102b51" }}>{subject.name}</h4>
                    <p className="text-secondary flex-grow-1 mb-0">{subject.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 className="text-muted">No virtual labs available for this semester yet.</h4>
              <p className="text-secondary">Check back later or select another semester.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Subjects;