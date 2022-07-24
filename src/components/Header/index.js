import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";

export default function Header() {
  const [dayOfWeek, setDayOfWeek] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    const now = new Date();
    setDayOfWeek(now.getDay());
  }, []);

  function dayMessage() {
    if (dayOfWeek === 0) {
      return "HOJE É DIA DE DESAFIO :)";
    } else if (dayOfWeek === 6) {
      return "HOJE É DIA DE EXPEDIÇÃO :)";
    } else {
      return "";
    }
  }

  function goToPath(path, event) {
    event.preventDefault();
    event.stopPropagation();
    navigate(path)
  }

  return (
    <header>
      <h1 className="header__title">Mir4 Note</h1>
      <h5 className="header__subtitle">{dayMessage()}</h5>
      <ul className="header__navigation">
        <li className="header__link">
          <a onClick={(e) => goToPath('/secret-peak', e)} href="#1">PICO SECRETO</a>
        </li>
        <li className="header__link">
          <a rel="noreferrer" target='_blank' href="https://forms.gle/pzbdwWwtiDMa4BE68">SUGESTÕES</a>
        </li>
      </ul>
      <p className="app-version">V0.1</p>
    </header>
  );
}
