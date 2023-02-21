import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardDesc,
  CardTitle,
  PriceValue,
  RegisterText,
  ResgisterBody,
  SubTitle,
  SubTitleContainer,
} from "../styles/RegisterCards/Styles";
import { HeadingTitle, MultiColorButton } from "../styles/globalStyles";

let bgColor = [
  "linear-gradient(180deg, #34a8d7 0%, rgba(0, 84, 118, 0.72) 100%)",
  " linear-gradient(100.02deg, #B31804 1.24%, #EA6452 92.29%);",
  "linear-gradient(180deg, #61BF8E 0%, #0C6335 92.71%);",
];
let index = 0;

const RegisterCard = ({
  title,
  description,
  image,
  Price,
  ParticipationType,
}) => {
  function getNextColor() {
    let color = bgColor[index];
    index = (index + 1) % bgColor.length;
    return color;
  }

  return (
    <>
      <CardBody>
        <div className="right-side">
          <img className="res-img" src={image} alt="card-img" />
        </div>
        <div className="left-side">
          <CardTitle>{title}</CardTitle>

          <SubTitleContainer>
            <SubTitle>Participation-Type : {ParticipationType}</SubTitle>
          </SubTitleContainer>

          <CardDesc>{description}</CardDesc>

          <ResgisterBody>
            <PriceValue className="border">
              {Price ? `Rs. ${Price}`  : "Soon to Declare..."}
            </PriceValue>

            <RegisterText className="border" bg={getNextColor()}>
              Register
            </RegisterText>
          </ResgisterBody>
        </div>
      </CardBody>
    </>
  );
};

export default RegisterCard;
