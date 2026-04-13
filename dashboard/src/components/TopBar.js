import React from "react";
import { Link, useLocation } from "react-router-dom";

const TopBar = ({ user, onLogout }) => {
  const location = useLocation();

  const handleMenuClick = () => {
    // Optional: any click handling
  };

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <div className="topbar-container">
      {/* Center: Logo */}
      <div className="logo-container">
        <img src="logo.png" alt="Logo" style={{ width: "32px" }} />
      </div>

      {/* Right side: Nav + Profile */}
      <div className="nav-profile-container">
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link-item ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={handleMenuClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="profile-section ms-4">
          <div className="user-avatar">ZU</div>
          <span className="username-label ms-2">{user || "muddyash"}</span>
          <button onClick={onLogout} className="logout-btn ms-3">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
