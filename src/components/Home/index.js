import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import EventCategory from "../EventCategory";
import Events from "../Events";
import About from "../About";
import { eventcategory1, eventcategory2, eventcategory3 } from "../EventCategory/EventCategoryData";
import { category1event1, category1event2 } from "../EventCategory/Category1EventsData";
import { category2event1, category2event2 } from "../EventCategory/Category2EventsData";
import { category3event1, category3event2 } from "../EventCategory/Category3EventsData";
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
            <EventCategory {...category1event1} {...category1event2} {...eventcategory1} />
            <EventCategory {...category2event1} {...category2event2} {...eventcategory2} />
            <EventCategory {...category3event1} {...category3event2} {...eventcategory3} />
            {/* <Events /> */}
            <About />
        </>
    )
}

export default Home;