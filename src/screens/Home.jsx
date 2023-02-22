import React, { useEffect, useRef, useState } from "react";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import EventHome from "../components/EventHome/EventHome";
import HighLights from "../components/HighLightHome/HighLights";
import { LabelBody } from "../styles/globalStyles";
import { Container, CounterBlock, ImgBG, NUVLogo } from "../styles/Home/Styles";
import Events from "./Events";
import Counter from "../components/Counter";
import PastMemories from "../components/Memories/PastMemories";
import Location from "./Location";
import Schedule from "./Schedule";
import { Element } from "react-scroll";
import Memories from "../components/Memories/Memories";
import BIRDS from "vanta/dist/vanta.birds.min";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);

  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          outerWidth: 0.5,
          scale: 1.0,
          scaleMobile: 1.0,
          wingSpan: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="">
      {/* ---- hero section ----  */}

      <ImgBG id="home" ref={myRef}>
      
        <div  className="logo-counter md:mt-5">
          <img src={"/images/yuva-logo.webp"} alt="nuvyuva-logo" />
        <div className="">
          <Counter />
        </div>
        
        </div>
      </ImgBG>

      {/* ----------- timer counter ----------------- */}
      <div></div>

      {/* ---- About us ----  */}

      <div id="aboutus" className=" pt-12">
        <Container className="">
          <AboutUs />
        </Container>
      </div>

      {/* ---- Events ---- */}
      <div className="pt-12">
        <EventHome />
      </div>

      {/* ---- Highlights ----  */}
      <div className="pt-12">
        <HighLights />
      </div>

      {/* ---- Events Schedule ----  */}
      <div id="schedule" className="pt-12">
        <Container>
          <Schedule />
        </Container>
      </div>

      {/* ---- Past Memories ----  */}

      {/* <PastMemories /> */}
      <div className=" mt-12  pt-12">
        <Memories />
      </div>

      {/* ---- Location ----  */}
      <Location />
    </div>
  );
};

export default Home;
