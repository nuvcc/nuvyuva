import React, { useEffect, useState } from "react";
import { HeadingTitle, SubHeadingTitle } from "../styles/globalStyles";
import { CounterBlock } from "../styles/Home/Styles";

const Counter = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  useEffect(() => {
    setTimeout(() => {
      let countDownDate = new Date("April 6, 2023 15:37:25").getTime();
      let now = new Date().getTime();
      let distance = countDownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
  });

  return (
    <CounterBlock>
      <div className="timer-block">
        <h1>{days}</h1>
        <span>Days</span>
      </div>
      <div className="timer-block">
        <h1> : </h1>
      </div>
      <div className="timer-block">
        <h1>{hours} </h1>
        <span>Hours</span>
      </div>
      <div className="timer-block">
        <h1> : </h1>
      </div>
      <div className="timer-block">
        <h1>{minutes} </h1>
        <span>Minute</span>
      </div>
      <div className="timer-block">
        <h1> : </h1>
      </div>
      <div className="timer-block">
        <h1>{seconds}</h1>
        <span>Seconds</span>
      </div>
    </CounterBlock>
  );
};

export default Counter;
