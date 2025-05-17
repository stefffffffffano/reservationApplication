import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "../style/ConfirmBooking.css";

const BookingConfirmation = () => {
  useEffect(() => {
    confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    ticks: 100,
    origin: {
        x: Math.random(),
        y: Math.random() - 0.2
    }
    });
  }, []);

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">✅</div>
        <h1 className="confirmation-title">Prenotazione confermata!</h1>
        <p className="confirmation-message">
          Abbiamo inviato una <strong>email di conferma</strong> alla tua casella di posta con i dettagli dell'appuntamento.
        </p>
        <p className="confirmation-thanks">
          Grazie per aver scelto la Dott.ssa Elisabetta Fumero. Ti aspettiamo!
        </p>
        <a href="/" className="back-home-button">Torna alla Home</a>
      </div>
    </div>
  );
};

export default BookingConfirmation;
