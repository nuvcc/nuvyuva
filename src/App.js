import React,{useEffect, useRef, useState} from 'react';

import "./App.css";
import logo from './logo.png';

const App = () =>{
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () =>{
    const countdownDate = new Date('April 06, 2022 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance/(1000*60*60*24));
      const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
      const minutes = Math.floor((distance%(1000*60*60*24))/(1000*60));
      const seconds = Math.floor((distance%(1000*60))/1000);

      if(distance<0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() =>{
    startTimer();
    return() =>{
      clearInterval(interval.current)
    };
  })

  return (
    <section className="App" id="#App">
      <section className="container">
      <section className="timer">
      <div>
          <img src={logo} className="logo" alt="logo"></img>
      </div>
      <div className="clock">
        <section>
          <p>{timerDays}</p>
          <p><small>DAYS</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p><small>HOURS</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p><small>MINUTES</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p><small>SECONDS</small></p>
        </section>
      </div>
      </section>
      </section>
    </section>
  );
}

export default App;
