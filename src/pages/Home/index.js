import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { useNavigate } from "react-router";
import "./styles.css";

import mapPeak from "../../assets/img/secret_peak_map_thumb.png";
import magicSquare from "../../assets/img/magic_square.png";
import mir4 from "../../assets/img/mir4.jpg";

export default function Home() {

  const navigate = useNavigate();

  function goToPath(path, event) {
    event.preventDefault();
    event.stopPropagation();
    navigate(path);
  }
  return (
    <div className="home">
      <section className="welcome">
        <div className="welcome__left-container">
          <h1 className="title">Mir4 Note</h1>
          <p className="welcome__text">
            Bem vindo ao mir4 note, feitos para te auxiliar na gameplay de mir4
          </p>
        </div>
        <div className="welcome__right-container">
          <img className="welcome__image" src={mir4} alt="mir4" />
        </div>
      </section>
      <section className="features">
        <h1 className="title">Novidades</h1>
        <div className="feature-grid">
          <FeatureCard
            image={mapPeak}
            title={"Pico Secreto"}
            text={"Track de time dos bosses do pico secreto."}
            onClick={(e) => goToPath('/secret-peak', e)}
          />
          <FeatureCard
            disabled={true}
            image={magicSquare}
            title={"Praça Magica"}
            text={"Ferramentas para te ajudar com a praça magica."}
          />
        </div>
      </section>
    </div>
  );
}
