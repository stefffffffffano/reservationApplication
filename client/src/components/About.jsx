import React from "react";
import "../style/About.css";

const AboutPage = () => {
  const doctorInfo = {
    name: "Dott.ssa Elisabetta Fumero",
    image: "images/image.jpg",
  };

  return (
    <div className="about-container">
      <div className="about-card">
        {/* Immagine rotonda */}
        <div className="about-avatar-wrapper">
          <img
            src={doctorInfo.image}
            alt={doctorInfo.name}
            className="about-avatar"
          />
        </div>

        <div className="about-content">
          <h1 className="about-title">{doctorInfo.name}</h1>

          <section className="about-section">
            <h2>🎓 Formazione e Titoli</h2>
            <p>
              Laureata in Medicina e Chirurgia presso l’Università degli Studi di Torino nel 2015, la Dott.ssa Fumero ha conseguito la specializzazione in Ginecologia e Ostetricia con il massimo dei voti.
            </p>
          </section>

          <section className="about-section">
            <h2>🏥 Esperienza Clinica</h2>
            <p>
              Oltre 10 anni di attività in ambito ospedaliero e ambulatoriale, con particolare attenzione alla prevenzione e al benessere globale della donna.
            </p>
          </section>

          <section className="about-section">
            <h2>💡 Filosofia Professionale</h2>
            <p>
              Ogni paziente è unica: la Dott.ssa Fumero si impegna per offrire un ascolto attento e 
              un’assistenza personalizzata in un ambiente riservato e accogliente.
            </p>
          </section>

          <section className="about-section">
            <h2>📍 Dove trovarci</h2>
            <p>
              Via Torino 31, Nole (Torino). Prenota direttamente dalla homepage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
