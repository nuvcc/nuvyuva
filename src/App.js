import React,{useEffect, useRef, useState} from 'react';
import BIRDS from "vanta/dist/vanta.birds.min";

import "./App.css";
import logo from './logo.png';

const App = () =>{

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
    <div className="App" id="#App" ref={myRef}>
     
    </div>
  );
}

export default App;
