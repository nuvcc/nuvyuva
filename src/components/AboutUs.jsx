import React from "react";
import {
  DescriptionText,
  ElementCenter,
  HeadingTitle,
  SubHeadingTitle,
} from "../styles/globalStyles";
import { AboutUsBody, Container } from "../styles/Home/Styles";
import { FaLink } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="">
      <ElementCenter>
        <HeadingTitle>About Us</HeadingTitle>
      </ElementCenter>

      <AboutUsBody className="grid sm:grid-cols-1 md:grid-cols-2 brder">
        <div className="side-1 ">
          <div className="flex items-center">
            <SubHeadingTitle>NUV युवा 2.0</SubHeadingTitle>
            <a target="_blank" href="/document/brochure_v22.pdf" download="brochure_v22.pdf"> <FaLink className="text-[#fff] ml-4 cursor-pointer" /></a>
          </div>

          <DescriptionText>
            NUV-YUVA is an inter-college festival that encourages students from
            various institutions all over gujarat to demonstrate their ability
            and talents in various fields and events. The event aims to bring
            together cultural, technical and sports aspects and merge them
            together with knowledge and enjoyment.
          </DescriptionText>
        </div>
        <div className="side-2 flex justify-center  w-full">
          <ElementCenter>
            <img src={"/images/yuva-logo-two.png"} alt="quote-img" />
          </ElementCenter>
        </div>
      </AboutUsBody>
    </div>
  );
};

export default AboutUs;
