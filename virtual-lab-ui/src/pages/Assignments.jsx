import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import bgImage from '../assets/bg-assignment.jpg'; 
 
const Assignments = () => {
  const { subjectId } = useParams(); 
  
  const [labs, setLabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjectLabs = async () => {
      try {
        console.log("1. Reading URL Parameter. subjectId is:", subjectId); 
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/assignments/subject/${subjectId}`);
        const data = await response.json();
        
        console.log("2. Data received from backend:", data); 
        
        setLabs(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching labs:", error);
        setIsLoading(false);
      }
    };

    fetchSubjectLabs();
  }, [subjectId]);

  if (isLoading) {
    return <div className="text-center py-5 mt-5"><div className="spinner-border text-primary"></div></div>;
  }

  return (
    <div 
      className="min-vh-100 position-relative pb-5 animation-fade-in"
      style={{
       
         backgroundImage: `url(${bgImage})`, 
        backgroundRepeat: "repeat",
        backgroundSize: "400px", 
        backgroundColor: "#f8f9fa" 
      }}
    >
      
     
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-white" 
        style={{ opacity: 0.85, zIndex: 0 }}
      ></div>

     
      <div className="container mt-5 pt-4 position-relative" style={{ zIndex: 1 }}>
        
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#102b51" }}>Experiment List</h1>
          <p className="lead text-secondary">Select an experiment to begin your virtual lab session.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {labs.length > 0 ? (
              labs.map((lab, index) => (
                <div 
                  className="card shadow-sm border-0 mb-4 rounded-4" 
                  key={lab._id}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }} 
                >
                  <div className="card-body p-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: "#102b51" }}>
                        Experiment {index + 1}: {lab.title}
                      </h5>
                      <p className="text-secondary mb-0">{lab.shortDesc}</p>
                    </div>
                    
                    
                    <Link 
                      to={`/assignment/${lab._id}`} 
                      className="btn fw-bold px-4 rounded-pill shadow-sm hover-lift"
                      style={{ backgroundColor: "#102b51", color: "white" }}
                    >
                      Start Lab ➔
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-5 card border-0 shadow-sm rounded-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
                <h4 className="text-muted">No experiments uploaded yet!</h4>
                <p>The faculty is still preparing the labs for this subject.</p>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Assignments;