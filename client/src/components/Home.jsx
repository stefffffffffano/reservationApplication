import React from "react";

import "../style/Home.css";

const HomePage = () => {
  const doctorInfo = {
    name: "Dott.ssa Elisabetta Fumero",
    email: "fumeroeli@hotmail.it",
    phone: "+39 3331121888",
    location: "Via Roma 10, Ciriè, Torino",
    image: "images/image.jpg" 
  };

  return (
    <div className="container">
      <div className="info-card">
        <div className="image-container">
          <img src={doctorInfo.image} alt={doctorInfo.name} className="doctor-image" />
        </div>
        <div className="text-container">
          <h1 className="doctor-name">{doctorInfo.name}</h1>
          <p className="doctor-info">📧 <a href={`mailto:${doctorInfo.email}`} className="doctor-link">{doctorInfo.email}</a></p>
          <p className="doctor-info">📞 <a href={`tel:${doctorInfo.phone}`} className="doctor-link">{doctorInfo.phone}</a></p>
          <p className="doctor-info">📍 {doctorInfo.location}</p>
          <button className="availability-button">
            📅 Visualizza Disponibilità
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

