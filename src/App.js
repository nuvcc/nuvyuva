import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

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
      const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
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

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect])

  return (
    <section className="App" id="#App" ref={myRef}>
      <section className="container" >
        <section className="timer">
          <div>
              <img src={logo} className="logo" alt="logo"></img>
          </div>
          <div className="clock">
            <div class="clock-section">
              <div class="clock-wrap">
                <div class="clock-timer">
                  {timerDays}
                </div>
                <div class="clock-txt">
                  DAYS
                </div>
              </div>
              <div class="clock-seperator">
                :
              </div>
            </div>
            <div class="clock-section">
              <div class="clock-wrap">
                <div class="clock-timer">
                  {timerHours}
                </div>
                <div class="clock-txt">
                  HOURS
                </div>
              </div>
              <div class="clock-seperator">
                :
              </div>
            </div>
            <div class="clock-section">
              <div class="clock-wrap">
                <div class="clock-timer">
                 {timerMinutes}
                </div>
                <div class="clock-txt">
                  MINUTES
                </div>
              </div>
              <div class="clock-seperator">
                :
              </div>
            </div>
            <div class="clock-section">
              <div class="clock-wrap">
                <div class="clock-timer">
                  {timerSeconds}
                </div>
                <div class="clock-txt">
                  SECONDS
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default App;
