import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/assignment -bg.png";
import { Link} from "react-router-dom";

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    yearOfStudy: "SE",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const endpoint = isLoginView ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (isLoginView) {
       
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);

       
        localStorage.setItem("isAdmin", data.user.isAdmin);

        // Redirect to the dashboard
        navigate("/");
      } else {
      
        alert("Registration successful! Please log in.");
        setIsLoginView(true);
        setFormData({ name: "", email: "", password: "", yearOfStudy: "SE" });
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "800px",
        minHeight: "100vh",
        backgroundColor: "rgba(255, 253, 253, 0.9)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <div className="card-body p-5">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#102b51" }}>
            {isLoginView ? "Welcome Back" : "Create Account"}
          </h2>

          {errorMsg && (
            <div className="alert alert-danger py-2">{errorMsg}</div>
          )}

          <form onSubmit={handleSubmit}>
           
            {!isLoginView && (
              <div className="mb-3">
                <label className="form-label text-secondary fw-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label text-secondary fw-bold">
                PICT College Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="ex - s24ec006@ms.pict.edu or faculty@pict.edu"
            
                pattern="^([a-zA-Z0-9._]+)@(ms\.)?pict\.edu$"
                title="Please enter a valid PICT email (e.g., student@ms.pict.edu or faculty@pict.edu)"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            
            {!isLoginView && (
              <div className="mb-3">
                <label className="form-label text-secondary fw-bold">
                  Year of Study
                </label>
                <select
                  className="form-select"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  required
                >
                  <option value="SE">Second Year (SE)</option>
                  <option value="TE">Third Year (TE)</option>
                  <option value="BE">Fourth Year (BE)</option>
                  <option value="Faculty">Faculty / Staff</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label className="form-label text-secondary fw-bold">
                Password
              </label>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  required
                  pattern="(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
                  title="Password must be at least 8 characters long, contain at least one number and one special character (!@#$%^&*)."
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ borderRight: "none" }}
                />

                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ borderColor: "#dee2e6", borderLeft: "none" }}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755l.192.195zm-1.688 1.688L10 11.25M11.25 10L12.926 11.676M8 4.5c-.176 0-.35.012-.52.036l.764.763A2.502 2.502 0 0 1 10.5 8c0 .176-.012.35-.036.52l.763.764A3.498 3.498 0 0 0 8 4.5zM2.08 1.08l12.84 12.84-.708.708-2.618-2.618A7.05 7.05 0 0 1 8 12.5C3 12.5 0 8 0 8s.939-1.721 2.641-3.238l-1.27-1.27.709-.708zm1.066 2.066L4.5 4.5M4.5 4.5L5.854 5.854M5.854 5.854a2.5 2.5 0 0 0 3.5 3.5l1.646 1.646C9.9 11.36 9 11.5 8 11.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="d-flex justify-content-end mt-1">
                <Link
                  to="/forgot-password"
                  className="text-decoration-none small text-primary"  
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold py-2 mb-3"
              style={{ backgroundColor: "#102b51", color: "white" }}
            >
              {isLoginView ? "Login" : "Register"}
            </button>
          </form>

          <div className="text-center mt-3">
            <span className="text-muted">
              {isLoginView
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              className="btn btn-link p-0 text-decoration-none fw-bold"
              style={{ color: "#102b51" }}
              onClick={() => {
                setIsLoginView(!isLoginView);
                setErrorMsg("");
              }}
            >
              {isLoginView ? "Sign Up" : "Log In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
