import React from "react";
import { Detail, Title } from "../styles/ContactUs/Style";
import {
  ElementCenter,
  HeadingTitle,
  SubHeadingTitle,
  DescriptionText,
} from "../styles/globalStyles";
import { Container } from "../styles/Home/Styles";

const ContactUs = () => {
  return (
    <Container>
      <ElementCenter>
        <HeadingTitle className="mt-20">Contact Us</HeadingTitle>
      </ElementCenter>
      <div className=" grid  md:grid-cols-2 sm:grid-cols-1 mt-12 ">
        <div className=" flex justify-center md:items-start ">
          <div className=" h-4/5 w-4/5 md:h-2/4 md:w-2/4">
            <img src="/images/yuva-logo-two.png" alt="" />
          </div>
        </div>
        <div className="p-8 md:pt-20">
          <ElementCenter className="flex-col items-center text-center">
            <Title>For any Quries mail us on:</Title>
            <Detail>nuvcc@nuv.ac.in</Detail>

            <Title className="mt-5">Address:</Title>
            <Detail>
              <ElementCenter>
                Vasna - Bhayli Main Rd, Bhayli, Vadodara, Gujarat 391410
              </ElementCenter>
            </Detail>
          </ElementCenter>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
