import React, { useCallback, useEffect, useState } from "react";
import { FaSkull, FaWindowClose } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import "./styles.css";
import sound from "../../assets/sound/alarm.mp3";

export default function Timer({
  initialHours = 0,
  initialMinute = 0,
  initialSeconds = 0,
  type = "SMALL",
  initiated,
}) {
  const BOSS_COLOR = {
    SMALL: "#1f9586",
    MEDIUM: "#b17d33",
    BIG: "#cb5339",
  };

  // Timer value in ms
  const [hasBeenTracked, setHasBeenTracked] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const triggerTimer = useCallback(() => {
    setHasBeenTracked(true);
    setHours(initialHours);
    setMinutes(initialMinute);
    setSeconds(initialSeconds);
  }, [initialHours, initialMinute, initialSeconds]);

  const playAudio = useCallback(() => {
    let audio = new Audio(sound);
    audio.play();
  }, []);

  useEffect(() => {
    if (initiated) triggerTimer();
  }, [initiated, triggerTimer]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (minutes === 0 && hours === 0 && seconds === 59) {
          playAudio();
        }
      }

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (type === "BIG") {
              let myInterval2 = setInterval(() => {
                clearInterval(myInterval2);
                setHours(5);
                setMinutes(59);
                setMinutes(30);
              }, 30000);
            }
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [hours, minutes, playAudio, seconds, type]);

  function padTime(time) {
    return String(time).padStart(2, "0");
  }

  function isBossAlive() {
    return minutes <= 0 && seconds <= 0;
  }

  function clearTimer() {
    setHasBeenTracked(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  function timeIsEnding() {
    return minutes === 0 && hours === 0 && seconds < 59;
  }

  return (
    <div>
      {isBossAlive() ? (
        <div onClick={triggerTimer} className="boss-button">
          <FaSkull
            size={24}
            color={hasBeenTracked ? BOSS_COLOR[type] : "gray"}
          />
        </div>
      ) : (
        <div
          className={`timer__wrapper boss--${type} ${
            timeIsEnding() ? "time-ending" : ""
          }`}
        >
          {hours > 0 ? (
            <input
              className="timer"
              value={`${padTime(hours)} : ${padTime(minutes)} : ${padTime(
                seconds
              )}`}
              disabled
            />
          ) : (
            <input
              className="timer"
              value={`${padTime(minutes)} : ${padTime(seconds)}`}
              disabled
            />
          )}
          <BiX
            className="close-icon"
            style={{ cursor: "pointer" }}
            onClick={clearTimer}
            size={32}
            color="white"
          />
        </div>
      )}
    </div>
  );
}
