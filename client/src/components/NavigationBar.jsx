import React from "react";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="myTitle">Studio ginecologico</h1>
      </div>
      <div className="nav-right">
        <a href="/login" className="nav-link">Accedi</a>
        <a href="/register" className="nav-link">Registrati</a>
      </div>
    </nav>
  );
};

export default NavigationBar;