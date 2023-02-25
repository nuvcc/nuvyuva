import {
  DescriptionText,
  ElementCenter,
  HeadingTitle,
  SubHeadingTitle,
} from "../styles/globalStyles";
import { AboutUsBody } from "../styles/Home/Styles";
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
          Navrachana University’s biggest and grandest Youth fest.
          <br /> 
          NUV-YUVA is a youth fest hosted by Navrachana University. The fest incorporates a bunch of TECHNICAL, NON-TECHNICAL, SPORTS and CULTURAL EVENTS. 
          The event aims to provide a space to learn skills and showcase talent on a large platform."								
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
