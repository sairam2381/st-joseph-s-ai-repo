import './Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-nav">
        <div className="nav-brand">
          <div className="nav-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="brand-name">ProApp Portal</span>
        </div>

        <div className="nav-user">
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-role">{user.role}</span>
          </div>
          <button className="logout-btn" onClick={onLogout} title="Sign Out">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-body">
        <div className="welcome-banner">
          <div className="badge-status">
            <span className="dot pulse"></span>
            Session Active
          </div>
          <h1>Hello, {user.name}! 👋</h1>
          <p>You have successfully authenticated into the application system.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
            </div>
            <div className="stat-content">
              <h3>Account Status</h3>
              <p className="stat-value">Verified</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon icon-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M6 8h.01M10 8h.01M14 8h.01" />
              </svg>
            </div>
            <div className="stat-content">
              <h3>User Email</h3>
              <p className="stat-value">{user.email}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon icon-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="stat-content">
              <h3>Security Level</h3>
              <p className="stat-value">Encrypted 256-bit</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
