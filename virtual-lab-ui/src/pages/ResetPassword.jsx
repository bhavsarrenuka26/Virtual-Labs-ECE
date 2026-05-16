import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const res = await fetch(`${apiUrl}/api/auth/reset-password/${token}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password updated successfully! Redirecting to login...");
        setTimeout(() => navigate('/login'), 3000); // Send o login after 3 seconds
      } else {
        setError(data.error || "Invalid or expired token.");
      }
    } catch (err) {
      setError("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5" style={{
      minHeight: "100vh",
  backgroundColor: "#ffffff",
  backgroundImage: "radial-gradient(60% 120% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(62, 116, 230, 0.5) 100%)",
  
}}>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Set New Password</h3>
        
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading} style={{ backgroundColor: '#1a2238' }}>
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;