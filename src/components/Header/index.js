import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";

export default function Header() {
  const [dayOfWeek, setDayOfWeek] = useState();
  const navigate = useNavigate();

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
    navigate(path);
  }

  function isLinkActive(link) {
    return window?.location?.href?.includes(link);
  }

  return (
    <header>
      <div>
        <h1
          onClick={(e) => goToPath("/", e)}
          href="#home"
          className="header__title"
        >
          Mir4 Note
        </h1>
        <h5 className="header__subtitle">{dayMessage()}</h5>
      </div>
      <div>
        <ul className="header__navigation">
          <li className={`header__link ${isLinkActive('home') ? 'active' : ''}`}>
            <a onClick={(e) => goToPath("/home", e)} href="#secret-peak">
              Home
            </a>
          </li>
          <li className={`header__link ${isLinkActive('secret-peak') ? 'active' : ''}`}>
            <a onClick={(e) => goToPath("/secret-peak", e)} href="#secret-peak">
              Pico Secreto
            </a>
          </li>
          <li className={`header__link ${isLinkActive('kda') ? 'active' : ''}`}>
            <a onClick={(e) => goToPath("/kda", e)} href="#kda">
              Calculadora KDA
            </a>
          </li>
          <li className="header__link">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://forms.gle/pzbdwWwtiDMa4BE68"
            >
              Sugestões
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="app-version">V0.1</p>
      </div>
    </header>
  );
}
