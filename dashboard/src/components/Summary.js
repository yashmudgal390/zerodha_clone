import React from "react";

const Summary = ({ user }) => {
  return (
    <div className="summary-wrapper">
      <div className="greeting-section mb-4">
        <h1 className="welcome-heading">Hi, {user || "Muddyash"}!</h1>
        <p className="subtext">Here's your portfolio summary for today.</p>
      </div>

      <div className="dashboard-grid">
        {/* Equity Section Card */}
        <div className="metrics-card">
          <div className="card-header-simple">
            <h5 className="section-title">Equity</h5>
          </div>
          <div className="card-body">
             <div className="equity-metrics-grid">
                <div className="metric-col">
                   <p className="metric-label">Margin available</p>
                   <h3 className="metric-value text-success">3.74k</h3>
                </div>
                <div className="metric-col border-left">
                   <p className="metric-label">Margins used</p>
                   <h3 className="metric-value text-warning">0</h3>
                </div>
                <div className="metric-col border-left">
                   <p className="metric-label">Opening balance</p>
                   <h3 className="metric-value">3.74k</h3>
                </div>
             </div>
          </div>
        </div>

        {/* Holdings Section Card */}
        <div className="metrics-card">
          <div className="card-header-simple d-flex align-items-center">
            <h5 className="section-title">Holdings</h5>
            <span className="holdings-badge">13</span>
          </div>
          <div className="card-body">
             <div className="holdings-metrics-grid">
                <div className="metric-item">
                   <p className="metric-label">Invested</p>
                   <h4 className="metric-value-large">29.88k</h4>
                </div>
                <div className="metric-item">
                   <p className="metric-label">P&L</p>
                   <h4 className="metric-value-large text-success">+1,553.40</h4>
                </div>
                <div className="metric-item">
                   <p className="metric-label">Current Value</p>
                   <h4 className="metric-value-large">31.43k</h4>
                </div>
                <div className="metric-item">
                   <p className="metric-label">Total P&L</p>
                   <h4 className="metric-value-large text-success">+5.20%</h4>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
