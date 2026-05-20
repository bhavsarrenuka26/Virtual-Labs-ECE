import React from 'react';
import { FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-4 mt-auto" style={{ backgroundColor: '#1a2238' }}>
      <div className="container">
       
        <div className="border border-white p-4">
          <div className="row">
            
            {/* conatct info */}
            <div className="col-md-6 mb-3 mb-md-0 d-flex flex-column justify-content-center border-end border-secondary">
              <div className="d-flex align-items-center mb-2">
                <FaHome className="me-3 text-white-50" />
                <span>Pune Institute Of Computer Technology</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaPhoneAlt className="me-3 text-white-50" />
                <span>+91 20 24371101</span>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="me-3 text-white-50" />
                <span>registrar@pict.edu</span>
              </div>
            </div>

            {/* Copyright & Links */}
            <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5">
              <p className="mb-2">© 2026 ECE Dept, PICT | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;