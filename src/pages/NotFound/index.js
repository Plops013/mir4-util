import React from "react";
import "./styles.css";
import { FaRobot } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h3 className="not-found__title">
          <FaRobot size="48" color="white" />
          <span className="not-found__404">404 Ops!</span>
        </h3>
        <p className="not-found__message">
          Parece que os bots mineraram essa pagina!
        </p>
      </div>
    </div>
  );
}
