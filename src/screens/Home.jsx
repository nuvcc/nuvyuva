import { useEffect, useRef, useState } from "react";
import AboutUs from "../components/AboutUs";
import EventHome from "../components/EventHome/EventHome";
import HighLights from "../components/HighLightHome/HighLights";
import { Container, ImgBG } from "../styles/Home/Styles";
import Counter from "../components/Counter";
import Location from "./Location";
import Schedule from "./Schedule";
import Memories from "../components/Memories/Memories";
import BIRDS from "vanta/dist/vanta.birds.min";
const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);

  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* ---- hero section ----  */}

      <ImgBG id="home" ref={myRef} >
        <div className="logo-counter md:mt-5">
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
    </>
  );
};

export default Home;
