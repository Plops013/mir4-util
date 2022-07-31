import React from "react";

// Boa PORRA!

export const useAnimationFrame = (callback1, callback2, initialSeconds) => {
  const animateStart = React.useRef(Date.now());
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  let fpsInterval, startTime, now, then, elapsed;
  let sinceStart = 0;
  fpsInterval = 1000 / 1;
  then = animateStart.current;
  startTime = then;

  function animate() {
    now = Date.now();
    elapsed = now - then;
    sinceStart = now - startTime;
    then = now - (elapsed % fpsInterval);

    const deltaTime =  Math.round(Math.round((sinceStart / 1000) * 100) / 100);
    callback1(deltaTime);
    
    console.log('(seconds - deltaTime) ', (initialSeconds - deltaTime) );
    if ((initialSeconds - deltaTime) === 59) {
      callback2();
    }

    document.title = `Tempo: ${(initialSeconds - deltaTime)}`

    if ((initialSeconds - deltaTime) > 0) {
      requestAnimationFrame(() => {
        setTimeout(animate, 1000 - elapsed);
      });
    }
  }

  React.useEffect(() => {
    animateStart.current = window.performance.now();
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
