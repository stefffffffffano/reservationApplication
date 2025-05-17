import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
      <button
        className="back-home-button"
        onClick={() => navigate("/")}
      >
        Torna alla Home
      </button>
    </div>
  );
};

export default NotFound;
