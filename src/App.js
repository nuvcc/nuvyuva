import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Home from "./screens/Home";
import "./styles/App.css";
import { theme } from "./styles/Theme/theme";
import Memories from "./components/Memories/Memories";
import Events from "./screens/Events";
import Team from "./screens/Team";
import ContactUs from "./screens/ContactUs";
import { ImgLoader } from "./styles/globalStyles";
import Footer from "./components/Footer";
import PaymentStatus from "./screens/PaymentStatus";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoaded = true;
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      {!isLoaded ? (
        <ImgLoader src="/loader.gif" alt="loader" hidden />
      ) : (
        <>
          {' '}
          <SideNav isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/status" element={<PaymentStatus />} />
          </Routes>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
