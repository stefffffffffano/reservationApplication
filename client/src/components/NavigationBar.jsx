import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="nav-links-left">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </div>

        <div className="hamburger-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        <div className="nav-underline" />
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* Side-menu da sinistra */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <NavLink
          to="/"
          className={`side-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`side-link ${location.pathname === "/about" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
      </div>
    </>
  );
};

export default NavigationBar;
