import React from "react";
import {
  CardBody,
  CardDesc,
  CardTitle,
  PriceValue,
  RegisterText,
  ResgisterBody,
} from "../../styles/RegisterCards/Styles";
import { HeadingTitle, MultiColorButton } from "../../styles/globalStyles";
import { ViewBtn } from "../../styles/Eventcard/Styles";
import { NavLink } from "react-router-dom";

let bgColor = [
  "linear-gradient(180deg, #34a8d7 0%, rgba(0, 84, 118, 0.72) 100%)",
  " linear-gradient(100.02deg, #B31804 1.24%, #EA6452 92.29%);",
  "linear-gradient(180deg, #61BF8E 0%, #0C6335 92.71%);",
];
let index = 0;
const EventHomeCard = ({ title, description, image, count }) => {

  function getNextColor() {
    let color = bgColor[index];
    index = (index + 1) % bgColor.length;
    return color;
  }

  return (
    <CardBody>
      <div className="left-side ">
        <div className="flex  justify-between w-4/4">
          <div>
            <CardTitle>{title}</CardTitle>
          </div>
          <div>
            <img
              src="/images/Polygon-4.png"
              className="polygon bottom-8"
              alt="polygonimg"
            />
          </div>
        </div>
        <CardDesc>{description}</CardDesc>

        <NavLink to={`/events?query=${title}`}>
          <ViewBtn bg={getNextColor()} className="mt-4">
            View All Events
          </ViewBtn>
        </NavLink>
      </div>
      <div className="right-side">
        <img className="img" src={"/images/event.png"} alt="card-img" />
        <div className=" flex flex-row-reverse">
          <img
            src="/images/Polygon-3.png"
            className="polygon left-80"
            alt="polygonimg"
          />
        </div>
      </div>
    </CardBody>
  );
};

export default EventHomeCard;
