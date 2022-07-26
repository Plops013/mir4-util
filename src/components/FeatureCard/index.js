import React from "react";
import "./styles.css";

export default function FeatureCard({ title, text, image, disabled, onClick }) {
  return (
    <div className={`feature-card ${disabled ? "disabled" : ""}`}>
      <div className={`feature-card__em-breve ${disabled ? "disabled" : ""}`}>
        <p>Em breve...</p>
      </div>
      <img className="feature-card__image" src={image} alt="Feature Card" />
      <div className="feature-card__description">
        {title && <h3 className="feature-card__title">{title}</h3>}
        {text && <p className="feature-card__text">{text}</p>}
        <a disabled={disabled} onClick={onClick} href="#link" className="feature-card__button">
          Ver agora
        </a>
      </div>
    </div>
  );
}
