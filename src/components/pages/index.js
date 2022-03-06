import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import Info from "../Info";
import Events from "../Events";
import About from "../About";
import { info1, info2, info3 } from "../Info/Data";
import Countdown from "../Countdown";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* <HeroSection /> */}
            <Countdown />
            <Info {...info1}/>
            <Info {...info2}/>
            <Info {...info3}/>
            <Events />
            <About />
        </>
    )
}

export default Home;