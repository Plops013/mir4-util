import React, { useState } from "react";
import "./styles.css";

export default function KDA() {
  const [level, setLevel] = useState();
  const [codex, setCodex] = useState();
  const [power, setPower] = useState();

  function calcKDA() {
    if (level && codex && power) {
        return (((level * 6) + (codex * 0.3) + (power * 0.1)) / 3).toFixed(2);
    } else {
        return '...'
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    e.stopPropagation();

    return parseFloat(e.target.value);
  }

  return (
    <div className="kda">
      <h1 className="title">Calculadora de KDA</h1>
      <form className="kda__form">
        <div className="input-group">
          <label>
            Presets <span className="disclaimer">(regras do clã)</span>
          </label>
          <select>
            <option>MAD</option>
          </select>
        </div>
        <div className="input-group">
          <label>Level</label>
          <input onChange={(e) => {setLevel(handleInputChange(e))}} type="text" id="level" placeholder="110" />
        </div>
        <div className="input-group">
          <label>Codex</label>
          <input onChange={(e) => {setCodex(handleInputChange(e))}} type="text" id="level" placeholder="400" />
        </div>
        <div className="input-group">
          <label>Power (em K)</label>
          <input onChange={(e) => {setPower(handleInputChange(e))}} type="text" id="level" placeholder="130" />
        </div>
      </form>
      <div className="kda__result">
        <h2>Seu KDA atual é</h2>
        <h1 className="kda__value">{ calcKDA() }</h1>
      </div>
    </div>
  );
}
