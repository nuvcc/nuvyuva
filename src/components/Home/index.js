import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import EventCategory from "../EventCategory";
import About from "../About";
import { eventcategory1, eventcategory2, eventcategory3 } from "../EventCategory/EventCategoryData";
import { category1event1, category1event2, category1event3 } from "../EventCategory/Category1EventsData";
import { category2event1, category2event2, category2event3 } from "../EventCategory/Category2EventsData";
import { category3event1, category3event2, category3event3 } from "../EventCategory/Category3EventsData";
import Countdown from "../Countdown";
import Highlights from "../Highlights";

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
            <EventCategory {...category1event1} {...category1event2} {...category1event3} {...eventcategory1} />
            <EventCategory {...category2event1} {...category2event2} {...category2event3} {...eventcategory2} />
            <EventCategory {...category3event1} {...category3event2} {...category3event3} {...eventcategory3} />
            {/* <Highlights /> */}
            {/* <About /> */}
        </>
    )
}

export default Home;