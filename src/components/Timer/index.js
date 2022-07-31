import React, { useState } from "react";
import { FaSkull, FaVolumeUp } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import "./styles.css";
import uma_merda from "../../assets/sound/uma_merda.mp3";
import maneirinho from "../../assets/sound/maneirinho.mp3";
import elite from "../../assets/sound/elite.mp3";
import gigante from "../../assets/sound/gigante.mp3";
import mais_ou_menos from "../../assets/sound/mais_ou_menos.mp3";
import { useAnimationFrame } from "../../hooks/useAnimation";

export default function Timer({
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
  const [seconds, setSeconds] = useState(initialSeconds);
  const [soundPlaying, setSoundPlaying] = useState(false);
  
  useAnimationFrame((deltaTime) => {
    console.log('hasBeenTracked', hasBeenTracked);
    if (hasBeenTracked) {  
      setSeconds(seconds - deltaTime);
    } else {
      setSeconds(seconds);
    }
  }, [playAudio, initialSeconds, hasBeenTracked])

  function timer() {
    setHasBeenTracked(true);
  }

  function playAudio() {
    if (!isSoundActive) return;

    let sound = new Audio(AUDIO_BIND[audio]);
    sound.play();

    setSoundPlaying(true);
    const soundInterval = setInterval(() => {
      setSoundPlaying(false);
      clearInterval(soundInterval);
    }, 5000);
  }

  function translateSecondsToTime(seconds) {
    if(seconds > 3600) {
      return new Date(seconds * 1000).toISOString().substr(11, 8);
    } else {
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    }
  }

  function isBossAlive() {
    return !hasBeenTracked;
  }

  function clearTimer() {
    setHasBeenTracked(false);
    setSeconds(0);
  }

  function timeIsEnding() {
    if (type === "BIG") {
      return seconds < 299;
    } else {
      return seconds < 59;
    }
  }

  return (
    <div className="timer__container">
      {isBossAlive() ? (
        <div onClick={timer} className="boss-button">
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
          <input
            className="timer"
            value={`${translateSecondsToTime(seconds)}`}
            disabled
          />
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
