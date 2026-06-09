import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error('Authentication failed');
        const data = await response.json();
        setUserData(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError('Session expired. Please log in again.');
        localStorage.removeItem('token');
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

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

      <h4 className="fw-bold">Loading Your Profile Details..!!</h4>
      <p className="text-muted">
        Please wait while we prepare everything for you...
      </p>
    </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <div className="alert alert-danger d-inline-block">{error}</div>
      </div>
    );
  }

  const completedLabs = userData?.completedLabs || [];

  const averageScore =
    completedLabs.length > 0
      ? (
          completedLabs.reduce((acc, lab) => acc + lab.score, 0) /
          completedLabs.length
        ).toFixed(0)
      : 0;

  const activeSubjects = new Set(
    completedLabs.map((lab) => lab.assignmentId?.subjectId?.name)
  ).size;

  const latestLab =
    completedLabs.length > 0
      ? completedLabs[completedLabs.length - 1]
      : null;

 
  const getLabDate = (lab) => {
    const raw =
      lab.submittedAt ||
      lab.completedAt ||
      lab.createdAt ||
      lab.date ||
      lab.updatedAt ||
      null;
    if (!raw) return null;
    const d = new Date(raw);
    return isNaN(d.getTime()) ? null : d;
  };

  const getActiveDaysThisWeek = () => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const activeDayIndices = new Set();
    completedLabs.forEach((lab) => {
      const d = getLabDate(lab);
      if (d && d >= startOfWeek) {
        activeDayIndices.add(d.getDay());
      }
    });
    return activeDayIndices;
  };

  const getLabsThisWeek = () => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    return completedLabs.filter((lab) => {
      const d = getLabDate(lab);
      return d && d >= startOfWeek;
    }).length;
  };

  const getCurrentStreak = () => {
    if (completedLabs.length === 0) return 0;
    const timestamps = completedLabs
      .map((lab) => {
        const d = getLabDate(lab);
        if (!d) return null;
        d.setHours(0, 0, 0, 0);
        return d.getTime();
      })
      .filter(Boolean);
    const uniqueDays = [...new Set(timestamps)].sort((a, b) => b - a);
    if (uniqueDays.length === 0) return 0;

    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const today = now.getTime();
    const yesterday = today - 86400000;
    if (uniqueDays[0] !== today && uniqueDays[0] !== yesterday) return 0;

    let streak = 1;
    for (let i = 0; i < uniqueDays.length - 1; i++) {
      if (uniqueDays[i] - uniqueDays[i + 1] === 86400000) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const getMotivationalMessage = (streak) => {
    if (streak === 0) return 'Submit a lab to start your streak!';
    if (streak === 1) return "Great start — come back tomorrow!";
    if (streak < 4) return "Keep it up — you're on a roll!";
    if (streak < 7) return 'Impressive consistency. Keep going!';
    return 'Unstoppable! You\'re a lab legend 🏆';
  };

  const getScoreClass = (score) => {
    if (score >= 7) return 'score-good';
    if (score >= 4) return 'score-warn';
    return 'score-danger';
  };

  const activeDaysThisWeek = getActiveDaysThisWeek();
  const labsThisWeek = getLabsThisWeek();
  const currentStreak = getCurrentStreak();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const todayIndex = new Date().getDay();

  const initials = userData?.name
    ? userData.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?';

  const yearLabel = {
    SE: 'Second Year (SE)',
    TE: 'Third Year (TE)',
    BE: 'Fourth Year (BE)',
  }[userData?.yearOfStudy];

  return (
    <>
      <style>{`
        .profile-page {
          min-height: 100vh;
          padding: 1.75rem 2rem;
          background: linear-gradient(135deg, #eef2ff 0%, #f8fafc 45%, #e0f2fe 100%);
        }

        .profile-page .page-title {
          font-size: 2rem;
          font-weight: 700;
          color: #102b51;
          margin-bottom: 2px;
        }

        .profile-page .page-subtitle {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        .profile-page .dash-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 20px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .profile-page .dash-grid {
            grid-template-columns: 1fr;
          }
          .profile-page {
            padding: 1rem;
          }
        }

        .profile-page .sidebar {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .profile-page .main-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Card base */
        .profile-page .p-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 16px;
          padding: 1.25rem;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
        }

        /* Profile card */
        .profile-page .profile-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #dbeafe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          color: #1e40af;
          margin: 0 auto 10px;
        }

        .profile-page .profile-name {
          font-size: 17px;
          font-weight: 700;
          color: #102b51;
          text-align: center;
          margin-bottom: 2px;
        }

        .profile-page .profile-email {
          font-size: 12px;
          color: #94a3b8;
          text-align: center;
        }

        .profile-page .p-divider {
          border: none;
          border-top: 1px solid rgba(15, 23, 42, 0.07);
          margin: 14px 0;
        }

        .profile-page .info-label {
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 4px;
        }

        .profile-page .badge-blue {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 8px;
          background: #dbeafe;
          color: #1e40af;
          font-weight: 500;
        }

        .profile-page .badge-green {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 8px;
          background: #dcfce7;
          color: #166534;
          font-weight: 500;
        }

        .profile-page .logout-btn {
          width: 100%;
          padding: 8px;
          border-radius: 10px;
          border: 1px solid #fecaca;
          background: transparent;
          color: #dc2626;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: background 0.15s;
        }

        .profile-page .logout-btn:hover {
          background: #fef2f2;
        }

        /* Streak card */
        .profile-page .streak-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .profile-page .streak-num {
          font-size: 36px;
          font-weight: 700;
          color: #b45309;
          line-height: 1;
        }

        .profile-page .streak-label {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 3px;
        }

        .profile-page .streak-flame {
          font-size: 30px;
        }

        .profile-page .week-row {
          display: flex;
          justify-content: space-between;
          gap: 4px;
          margin-top: 8px;
        }

        .profile-page .day-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .profile-page .day-dot {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .profile-page .day-dot.active {
          background: #fef3c7;
          border-color: #f59e0b;
          color: #b45309;
        }

        .profile-page .day-dot.today {
          background: #b45309;
          border-color: #b45309;
          color: white;
        }

        .profile-page .day-name {
          font-size: 10px;
          color: #94a3b8;
        }

        .profile-page .day-name.today-lbl {
          color: #b45309;
          font-weight: 600;
        }

        .profile-page .streak-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(15, 23, 42, 0.07);
        }

        .profile-page .streak-footer-label {
          font-size: 13px;
          color: #64748b;
        }

        .profile-page .streak-footer-val {
          font-size: 13px;
          font-weight: 600;
          color: #102b51;
        }

        .profile-page .motivational {
          font-size: 11px;
          color: #94a3b8;
          font-style: italic;
          text-align: center;
          margin-top: 10px;
          line-height: 1.5;
        }

        /* Stat grid */
        .profile-page .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .profile-page .stat-box {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 14px;
          padding: 1rem;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }

        .profile-page .stat-num {
          font-size: 30px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 4px;
        }

        .profile-page .stat-num.blue  { color: #2563eb; }
        .profile-page .stat-num.green { color: #059669; }
        .profile-page .stat-num.amber { color: #d97706; }

        .profile-page .stat-lbl {
          font-size: 12px;
          color: #64748b;
        }

        /* Recent activity */
        .profile-page .recent-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .profile-page .recent-section-lbl {
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 6px;
        }

        .profile-page .recent-exp-name {
          font-size: 15px;
          font-weight: 700;
          color: #102b51;
          margin-bottom: 2px;
        }

        .profile-page .recent-exp-subject {
          font-size: 13px;
          color: #64748b;
        }

        /* Score badges */
        .profile-page .score-good {
          font-size: 13px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 99px;
          background: #dcfce7;
          color: #166534;
          white-space: nowrap;
        }

        .profile-page .score-warn {
          font-size: 13px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 99px;
          background: #fef9c3;
          color: #854d0e;
          white-space: nowrap;
        }

        .profile-page .score-danger {
          font-size: 13px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 99px;
          background: #fee2e2;
          color: #991b1b;
          white-space: nowrap;
        }

        /* Lab history */
        .profile-page .history-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .profile-page .history-title {
          font-size: 15px;
          font-weight: 700;
          color: #102b51;
        }

        .profile-page .history-count {
          font-size: 12px;
          color: #94a3b8;
        }

        .profile-page .history-list {
          max-height: 420px;
          overflow-y: auto;
        }

        .profile-page .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          transition: background 0.15s;
          cursor: default;
        }

        .profile-page .history-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .profile-page .history-item:first-child {
          padding-top: 0;
        }

        .profile-page .item-subject {
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 3px;
        }

        .profile-page .item-name {
          font-size: 13px;
          font-weight: 600;
          color: #102b51;
        }

        
        .profile-page .empty-state {
          text-align: center;
          padding: 2.5rem 1rem;
          color: #94a3b8;
        }

        .profile-page .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .profile-page .empty-title {
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 4px;
        }

        .profile-page .empty-sub {
          font-size: 13px;
          color: #94a3b8;
        }
      `}</style>

      <div className="profile-page">
        <h1 className="page-title">Student Dashboard</h1>
        <p className="page-subtitle">Welcome back, {userData?.name?.split(' ')[0]} !! </p>

        <div className="dash-grid">

         
          <div className="sidebar">

            {/* Profile card */}
            <div className="p-card">
              <div className="profile-avatar">{initials}</div>
              <div className="profile-name">{userData?.name}</div>
              <div className="profile-email">{userData?.email}</div>

              <hr className="p-divider" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <div className="info-label">Academic standing</div>
                  <span className="badge-blue">
                    {' '}
                    {userData?.isAdmin ? 'Faculty / Admin Access' : yearLabel}
                  </span>
                </div>
                <div>
                  <div className="info-label">Status</div>
                  <span className="badge-green">Active learner</span>
                </div>
              </div>

              <hr className="p-divider" />

              <button className="logout-btn" onClick={handleLogout}>
                Log out
              </button>
            </div>

            {/* Streak card */}
            <div className="p-card">
              <div className="streak-top">
                <div>
                  <div className="streak-num">{currentStreak}</div>
                  <div className="streak-label">day streak</div>
                </div>
                <span className="streak-flame">🔥</span>
              </div>

              <div className="info-label">This week</div>
              <div className="week-row">
                {weekDays.map((day, i) => {
                  const isToday = i === todayIndex;
                  const isActive = activeDaysThisWeek.has(i);
                  return (
                    <div className="day-col" key={day}>
                      <div
                        className={`day-dot ${
                          isToday ? 'today' : isActive ? 'active' : ''
                        }`}
                      >
                        {isActive || isToday ? '✓' : '·'}
                      </div>
                      <span
                        className={`day-name ${isToday ? 'today-lbl' : ''}`}
                      >
                        {day}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="streak-footer">
                <span className="streak-footer-label">Labs this week</span>
                <span className="streak-footer-val">{labsThisWeek}</span>
              </div>

              <div className="motivational">
                {getMotivationalMessage(currentStreak)}
              </div>
            </div>
          </div>

        
          <div className="main-col">

         
            <div className="stat-grid">
              <div className="stat-box">
                <div className="stat-num blue">{completedLabs.length}</div>
                <div className="stat-lbl">Labs attempted</div>
              </div>
              <div className="stat-box">
                <div className="stat-num green">{averageScore}</div>
                <div className="stat-lbl">Avg quiz score</div>
              </div>
              <div className="stat-box">
                <div className="stat-num amber">{activeSubjects}</div>
                <div className="stat-lbl">Active subjects</div>
              </div>
            </div>

            {/* Recent activity */}
            {/* {latestLab && (
              <div className="p-card">
                <div className="recent-section-lbl">Recent activity</div>
                <div className="recent-row">
                  <div>
                    <div className="recent-section-lbl" style={{ marginBottom: 4 }}>
                      Last completed experiment
                    </div>
                    <div className="recent-exp-name">
                      {latestLab.assignmentId?.title}
                    </div>
                    <div className="recent-exp-subject">
                      {latestLab.assignmentId?.subjectId?.name}
                    </div>
                  </div>
                  <span className={getScoreClass(latestLab.score)}>
                    Score: {latestLab.score}
                  </span>
                </div>
              </div>
            )} */}

            {/* Lab history */}
            <div>
              <div className="history-header">
                <span className="history-title">Labs Completed</span>
                <span className="history-count">
                  {completedLabs.length}{' '}
                  {completedLabs.length === 1 ? 'experiment' : 'experiments'}
                </span>
              </div>

              <div className="p-card">
                {completedLabs.length > 0 ? (
                  <div className="history-list">
                    {completedLabs
                      .slice()
                      .reverse()
                      .map((lab, index) => (
                        <div className="history-item" key={index}>
                          <div>
                            <div className="item-subject">
                              {lab.assignmentId?.subjectId?.name}
                            </div>
                            <div className="item-name">
                              {lab.assignmentId?.title}
                            </div>
                          </div>
                          <span className={getScoreClass(lab.score)}>
                            Score: {lab.score}
                          </span>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon"></div>
                    <div className="empty-title">No labs completed yet</div>
                    <div className="empty-sub">
                      Complete your first experiment to start tracking progress.
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;