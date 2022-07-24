import React, { useCallback, useEffect, useState } from "react";
import { FaSkull, FaVolumeUp } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import "./styles.css";
import uma_merda from "../../assets/sound/uma_merda.mp3";
import maneirinho from "../../assets/sound/maneirinho.mp3";
import elite from "../../assets/sound/elite.mp3";
import gigante from "../../assets/sound/gigante.mp3";
import mais_ou_menos from "../../assets/sound/mais_ou_menos.mp3";

export default function Timer({
  initialHours = 0,
  initialMinute = 0,
  initialSeconds = 0,
  type = "SMALL",
  initiated,
  audio,
  isSoundActive,
}) {
  const BOSS_COLOR = {
    SMALL: "#1f9586",
    MEDIUM: "#b17d33",
    BIG: "#cb5339",
  };

  const AUDIO_BIND = {
    uma_merda,
    maneirinho,
    gigante,
    elite,
    mais_ou_menos,
  };

  // Timer value in ms
  const [hasBeenTracked, setHasBeenTracked] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [soundPlaying, setSoundPlaying] = useState(false);

  const triggerTimer = useCallback(() => {
    setHasBeenTracked(true);
    setHours(initialHours);
    setMinutes(initialMinute);
    setSeconds(initialSeconds);
  }, [initialHours, initialMinute, initialSeconds]);

  const playAudio = useCallback(() => {
    console.log(isSoundActive);
    if (isSoundActive) {
      let sound = new Audio(AUDIO_BIND[audio]);
      sound.play();
      setSoundPlaying(true);
      const soundInterval = setInterval(() => {
        setSoundPlaying(false);
        clearInterval(soundInterval);
      }, 5000);
    }
  }, [isSoundActive]);

  useEffect(() => {
    if (initiated) triggerTimer();
  }, [initiated, triggerTimer]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (type === "BIG" && minutes === 4 && hours === 0 && seconds === 58) {
          playAudio();
        }
        if (minutes === 0 && hours === 0 && seconds === 58) {
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
                setSeconds(30);
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
    if (type === "BIG") {
      return minutes < 5 && hours === 0 && seconds < 59;
    } else {
      return minutes === 0 && hours === 0 && seconds < 59;
    }
  }

  return (
    <div class="timer__container">
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
      {soundPlaying && (
        <FaVolumeUp className="sound-alert" size={32} color="white" />
      )}
    </div>
  );
}
