import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} 
from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Subjects from "./pages/Subjects";
import Home from "./pages/Home";
import Assignments from "./pages/Assignments";
import AssignmentDetails from "./pages/AssignmentDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SubjectLabs from "./pages/SubjectLabs";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


import AILabAssistant from "./components/AILabAssistant";


const GlobalAIAssistant = () => {
  const location = useLocation();

  
  const hideOnPages = ["/admin-dashboard", "/about", "/team", "/login"];

  
  if (hideOnPages.includes(location.pathname)) {
    return null;
  }

 
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        width: "350px",
      }}
    >
     
      <AILabAssistant labId={null} />
    </div>
  );
};


const Layout = ({ children }) => {
  const location = useLocation();

  
  const showFooter = location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">{children}</main>

      {showFooter && <Footer />}

      <GlobalAIAssistant />
    </div>
  );
};


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
         
          <Route path="/" element={<Subjects />} />

        
          <Route path="/home" element={<Home />} />

         
          <Route path="/subject/:subjectId/labs" element={<SubjectLabs />} />
          <Route path="/assignment/:id" element={<AssignmentDetails />} />

         
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
