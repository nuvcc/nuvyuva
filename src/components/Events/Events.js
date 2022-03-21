import React from "react";
import { Carousel } from "3d-react-carousal";
import "./Events.css";
import tech from "./tech.png";
import cultural from "./cultural.png";
import gaming from "./gaming.png";
import workshop from "./workshop.png";
import sports from "./sports.png";

const Events = () => {
  let slides = [
    <a href="/technical">
      <img className="events-img" src={tech} alt="Technical Events" />
    </a>,
    <a href="/workshop">
      <img className="events-img" src={workshop} alt="Workshops" />
    </a>,
    <a href="/gaming">
      <img className="events-img" src={gaming} alt="Gaming Events" />
    </a>,
    <a href="/cultural">
      <img className="events-img" src={cultural} alt="Cultural Events" />{" "}
    </a>,
    <a href="/sports">
      <img className="events-img" src={sports} alt="Sports Events" />{" "}
    </a>,
  ];

  return (
    <div className="events">
      <div className="event-heading">EVENTS</div>
      <div className="events-cards">
        <Carousel slides={slides} autoplay={true} interval={2000} arrows={true} />
      </div>
    </div>
  );
};

export default Events;
