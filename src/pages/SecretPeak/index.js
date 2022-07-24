import React, { useEffect, useState } from "react";
import Timer from "../../components/Timer";
import { convertMsToTime, parseTime } from "../../utils";
import "./styles.css";
import image from '../../assets/img/secret_peak_map.png'

export default function SecreatPeak() {
  const [southBoss, setSouthBoss] = useState();
  const [northBoss, setNorthBoss] = useState();

  const bigBossSpawn = {
    south: ["13:00:00", "19:00:00", "01:00:00", "07:00:00"],
    north: ["16:00:00", "22:00:00", "04:00:00", "10:00:00"],
  };

  useEffect(() => {
    setSouthBoss(timeToBossSpawn(bigBossSpawn.south));
    setNorthBoss(timeToBossSpawn(bigBossSpawn.north));
  }, []);

  function timeToBossSpawn(bossSpawnTimes) {
    const now = new Date();
    let bestMatch = undefined;
    let bestMatchDiff = undefined;

    for (let i = 0; i < bossSpawnTimes.length; i++) {
      let parsedTime = parseTime(bossSpawnTimes[i]);
      if (parsedTime.getHours() === 1 || parsedTime.getHours() === 4) {
        parsedTime.setDate(parsedTime.getDate() + 1);
      }

      if (parsedTime > now) {
        let diff = Math.abs(now - parsedTime);
        if (!bestMatchDiff || bestMatchDiff > diff) {
          bestMatch = parsedTime;
          bestMatchDiff = diff;
        }
      }
    }

    return {
      bestMatch,
      ...convertMsToTime(bestMatchDiff),
    };
  }

  return (
    <div style={{ height: "100%" }}>
      <div className="mobile-advice">
        <h3>
          {" "}
          Ops, mapa do pico secreto ainda não está disponível para mobile :({" "}
        </h3>
      </div>
      <div className="secret-peak__wrapper">
        <div className="secret-peak">
        <img alt="Secret Peak Map" src={image} />
          <div className="secret-peak__timer--small-left-boss">
            <Timer initialMinute={30} />
          </div>
          <div class="secret-peak__timer--small-left-up-boss">
            <Timer initialMinute={30} />
          </div>
          <div class="secret-peak__timer--small-north-boss">
            <Timer initialMinute={30} />
          </div>
          <div class="secret-peak__timer--small-right-boss">
            <Timer initialMinute={30} />
          </div>
          <div class="secret-peak__timer--medium-left-boss">
            <Timer initialMinute={60} type="MEDIUM" />
          </div>
          <div class="secret-peak__timer--medium-right-boss">
            <Timer initialMinute={60} type="MEDIUM" />
          </div>
          <div class="secret-peak__timer--big-north-boss">
            <Timer
              initialHours={northBoss?.hours ?? 0}
              initialMinute={northBoss?.minutes ?? 0}
              initialSeconds={northBoss?.seconds ?? 0}
              initiated={true}
              type="BIG"
            />
          </div>
          <div class="secret-peak__timer--big-south-boss">
            <Timer
              initialHours={southBoss?.hours ?? 0}
              initialMinute={southBoss?.minutes ?? 0}
              initialSeconds={southBoss?.seconds ?? 0}
              initiated={true}
              type="BIG"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
