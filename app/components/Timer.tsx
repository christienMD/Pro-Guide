import React, { useState, useEffect } from "react";

const Timer = ({ totalTime, onTimeout }: { totalTime: number; onTimeout: () => void }) => {
  const [secondsLeft, setSecondsLeft] = useState(totalTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [totalTime, onTimeout]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return <div>{`${formattedMinutes}:${formattedSeconds}`}</div>;
};

export default Timer;
