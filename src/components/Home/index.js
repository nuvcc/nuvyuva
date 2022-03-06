import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import EventCategory from "../EventCategory";
import Events from "../Events";
import About from "../About";
import { eventcategory1, eventcategory2, eventcategory3 } from "../EventCategory/EventCategoryData";
import { category1event1 } from "../EventCategory/Category1EventsData";
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
            <EventCategory {...eventcategory1} {...category1event1}/>
            <EventCategory {...eventcategory2}/>
            <EventCategory {...eventcategory3}/>
            <Events />
            <About />
        </>
    )
}

export default Home;