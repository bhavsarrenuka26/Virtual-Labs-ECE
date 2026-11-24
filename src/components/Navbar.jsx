import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import pictLogo from '../assets/logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!token) {
      setCurrentUser(null);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentUser(data);
        } else {
          localStorage.removeItem("token");
          setCurrentUser(null);
        }
      } catch (err) {
        console.error("Failed to load user in Navbar:", err);
      }
    };

    fetchUser();
  }, [token]);

  const userName = currentUser?.name || "";
  const isAdmin = currentUser?.isAdmin === true;

  const getInitial = (name) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("isAdmin");
    setCurrentUser(null);
    closeMenu();
    navigate("/login");
  };

  const closeMenu = () => {
    const closeButton = document.querySelector('#offcanvasNavbar .btn-close');
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top" style={{ backgroundColor: '#1a2238' }}>
      <div className="container">
        
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <img 
            src={pictLogo} 
            alt="PICT Logo" 
            height="45" 
            className="d-inline-block align-text-top bg-white rounded-circle" 
          />
          <div className="d-flex flex-column" style={{ lineHeight: '1.2' }}>
            <span className="fw-bold text-white" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>ECE Virtual Labs</span>
          </div>
        </Link>
        
        
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
       
        <div 
          className="offcanvas offcanvas-end" 
          tabIndex="-1" 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
          style={{ backgroundColor: '#1a2238' }}
        >
          <div className="offcanvas-header border-bottom border-secondary">
            <h5 className="offcanvas-title text-white fw-bold" id="offcanvasNavbarLabel">Menu</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white shadow-none" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex flex-column">
           
            <ul className="navbar-nav ms-lg-auto gap-4 align-items-center">
              
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold hover-underline text-center" to="/" onClick={closeMenu}>Home</Link>
              </li>

              {/*  Authentication */}
              {token ? (
                <>
                  {isAdmin && (
                    <li className="nav-item mt-3 mt-lg-0 w-100 d-flex justify-content-center">
                      <Link 
                        to="/admin-dashboard" 
                        className="btn btn-danger px-4 text-nowrap rounded-pill fw-bold shadow-sm" 
                        onClick={closeMenu}
                      >
                         Admin Panel
                      </Link>
                    </li>
                  )}

                  <li className="nav-item mt-3 mt-lg-0 d-flex justify-content-center">
                    <Link to="/profile" className="text-decoration-none" onClick={closeMenu}>
                      <div 
                        className="rounded-circle bg-white text-dark d-flex justify-content-center align-items-center fw-bold shadow-sm"
                        style={{ width: '40px', height: '40px', fontSize: '1.2rem', cursor: 'pointer' }}
                        title={`${userName} - View Profile`} 
                      >
                        {getInitial(userName)}
                      </div>
                    </Link>
                  </li>
                  
                  <li className="nav-item mt-3 mt-lg-0 w-100 d-flex justify-content-center">
                    <button 
                      onClick={handleLogout} 
                      className="btn btn-outline-light px-4 rounded-pill fw-bold"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item mt-3 mt-lg-0 w-100 d-flex justify-content-center">
                  <Link className="btn btn-outline-light px-4 rounded-pill fw-bold" to="/login" onClick={closeMenu}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


