import React from "react";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const doctorInfo = {
    name: "Dott.ssa Elisabetta Fumero",
    email: "elisabetta.fumero@gmail.com",
    phone: "+39 3273765908",
    location: "Via Torino 31, Nole, Torino",
    image: "images/image.jpg"
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image-wrapper">
          <img
            src={doctorInfo.image}
            alt={doctorInfo.name}
            className="home-image"
          />
        </div>

        <div className="home-info">
          <h1 className="home-title">{doctorInfo.name}</h1>
          <p className="home-detail">📧 <a href={`mailto:${doctorInfo.email}`} className="home-link">{doctorInfo.email}</a></p>
          <p className="home-detail">📞 <a href={`tel:${doctorInfo.phone}`} className="home-link">{doctorInfo.phone}</a></p>
          <p className="home-detail">📍 {doctorInfo.location}</p>

          <a
            href="https://tidycal.com/elisabettafumero/orari-visite"
            className="home-button">
            📅 Prenota ora
          </a>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
