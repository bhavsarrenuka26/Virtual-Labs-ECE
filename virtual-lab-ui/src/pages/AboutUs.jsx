import React from 'react';
import hodece from "../assets/hodece.png";
import rapatil from "../assets/rapatil.png"

const AboutUs = () => {
 const mentors = [
    {
      id: 1,
      name: "Dr. Sunil Moon",
      role: "Professor & Head, ECE Dept.",
      college: "PICT, Pune, India",
      email: "hodece@pict.edu",
      image: hodece,
     
      linkedin: "https://www.linkedin.com/in/sunil-moon-453879238" 
    },
    {
      id: 2,
      name: "Prof. Rupali A. Patil",
      role: "Associate Professor, ECE Dept.",
      college: "PICT, Pune, India",
      email: "rapatil@pict.edu",
      image: rapatil,
  
      linkedin: "https://www.linkedin.com/in/rupali-patil-b7b90558"
    }
  ];

  return (
  
    <div className="py-5" style={{
      minHeight: "100vh",
  backgroundColor: "#ffffff",
  backgroundImage: "radial-gradient(60% 120% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(62, 116, 230, 0.5) 100%)",
  
}}>
      <div className="container animation-fade-in mt-4">
        
      
        <div className="text-center text-blue-500 mb-5">
          <h1 className="fw-bold mb-3" style={{ fontFamily: "serif", fontSize: "3rem" }}>Our Mentors</h1>
          <p className="lead mx-auto" style={{ maxWidth: "900px", fontSize: "1.1rem" }}>
            I express my gratitude to the esteemed mentors who provided me with invaluable guidance, content, and ideas to shape this project.
          </p>
        </div>

       
        <div className="row justify-content-center align-items-stretch g-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="col-12 col-md-6 col-lg-4 d-flex">
              
              <div 
                className="card border-0 w-100 text-center shadow-lg"
                style={{
                  backgroundColor: "#d9e2ec", 
                  borderRadius: "10px",
                  padding: "40px 20px",
                  transition: "all 0.3s ease", 
                  cursor: "pointer"
                }}
               
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#9ab2d4"; 
                  e.currentTarget.style.transform = "translateY(-8px)"; 
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#d9e2ec"; 
                  e.currentTarget.style.transform = "translateY(0px)"; 
                }}
              >
                
               
                <div className="mb-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="rounded-circle shadow-sm"
                    style={{ 
                      width: "160px", 
                      height: "160px", 
                      objectFit: "cover",
                      border: "4px solid #4a5c73" 
                    }} 
                  />
                </div>

            
                <h3 className="fw-bold mb-1 text-dark">{mentor.name}</h3>
                
             
               <div className="my-3">
                 
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none" title={`${mentor.name}'s LinkedIn`}>
                    <span 
                      className="d-inline-flex justify-content-center align-items-center rounded-circle"
                      style={{ backgroundColor: "#5780a6", width: "35px", height: "35px", color: "white" }}
                    >
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </span>
                  </a>
                </div>

              
                <div className="mt-auto">
                  <p className="text-secondary fw-bold mb-1" style={{ fontSize: "0.9rem" }}>{mentor.role}</p>
                  <p className="text-secondary mb-0" style={{ fontSize: "0.9rem" }}>
                    {mentor.college} | <a href={`mailto:${mentor.email}`} className="text-secondary text-decoration-none">{mentor.email}</a>
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AboutUs;