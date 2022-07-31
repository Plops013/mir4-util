import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { useNavigate } from "react-router";
import "./styles.css";

import mapPeak from "../../assets/img/secret_peak_map_thumb.png";
import magicSquare from "../../assets/img/magic_square.png";
import mir4 from "../../assets/img/mir4.jpg";
import clan from "../../assets/img/clan.jpg";
import epicItem from "../../assets/img/epic_item.png";

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
            image={clan}
            title={"Calculadora de KDA"}
            text={
              "Ferramentas para te ajudar a entender em qual posição você está no seu clã"
            }
            onClick={(e) => goToPath("/kda", e)}
          />
          <FeatureCard
            disabled={true}
            image={mapPeak}
            title={"Pico Secreto"}
            text={"Track de time dos bosses do pico secreto."}
          />
          <FeatureCard
            disabled={true}
            image={magicSquare}
            title={"Praça Magica"}
            text={"Ferramentas para te ajudar com a praça magica."}
          />
          <FeatureCard
            disabled={true}
            image={epicItem}
            title={"Calculadora de Itens"}
            text={
              "Ferramentas para te ajudar a calcular quanto de material, dark steel, cobre e pó brilhante faltam para concluir o seu item"
            }
          />
        </div>
      </section>
    </div>
  );
}
