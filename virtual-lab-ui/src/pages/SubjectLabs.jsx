import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bgImage from '../assets/assignment -bg.png';
const SubjectLabs = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [labs, setLabs] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const fetchLabs = async () => {
    try {
      // Use the dedicated subject route instead of fetching everything
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/subject/${subjectId}`);
      const data = await res.json();
      setLabs(data);  // No need to filter — backend does it

      const subRes = await fetch(`${import.meta.env.VITE_API_URL}/api/subjects`);
      const subData = await subRes.json();
      const currentSub = subData.find(s => s._id === subjectId);
      if (currentSub) setSubjectName(currentSub.name);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching labs:", error);
      setIsLoading(false);
    }
  };

  fetchLabs();
}, [subjectId]);

  if (isLoading) return <div className="text-center mt-5"><div className="spinner-border text-primary"></div></div>;

  return (
    <div
         style={{
           backgroundImage: `url(${bgImage})`,
           backgroundSize: "800px",
           backgroundRepeat: "repeat",
           backgroundPosition: "top left",
           width: "100%",
           minHeight: "100vh",
           backgroundColor: "rgba(255, 253, 253, 0.9)",
           backgroundBlendMode: "overlay",
         }}
       >
    <div className="container mt-2 pb-5 animation-fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button className="btn btn-outline-secondary mb-3 fw-bold rounded-pill px-4" onClick={() => navigate('/')}>
            ← Back to Dashboard
          </button>
          <h2 className="fw-bold" style={{ color: "#102b51" }}>{subjectName} Practicals</h2>
          <p className="text-muted mb-0">Select an experiment to begin your virtual lab session.</p>
        </div>
      </div>

      <div className="row g-4">
        {labs.length > 0 ? (
          labs.map((lab) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={lab._id}>
              <div 
                className="card shadow-sm border-0 rounded-4 w-100 p-4"
                style={{ cursor: "pointer", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                onClick={() => navigate(`/assignment/${lab._id}`)} 
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.classList.add('shadow');
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.classList.remove('shadow');
                }}
              >
                <span className="badge bg-primary bg-opacity-10 text-primary mb-3 py-2 px-3 rounded-pill" style={{ width: "fit-content" }}>
                  Practical {lab.assignmentId}
                </span>
                <h5 className="fw-bold mb-3 text-dark" style={{ lineHeight: "1.4" }}>
                  Experiment {lab.assignmentId}: {lab.title}
                </h5>
                <p className="text-secondary small mb-0">{lab.shortDesc}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5 mt-4 bg-light rounded-4 border border-dashed">
            <h5 className="text-muted fw-bold mb-2">No Practicals Found</h5>
            <p className="text-secondary">The laboratory experiments for this subject are currently being updated by the faculty.</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default SubjectLabs;