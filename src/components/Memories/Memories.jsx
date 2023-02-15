import React from "react";
import { ElementCenter, HeadingTitle } from "../../styles/globalStyles";
import {
  TextHeading,
  MemoryBody,
  FlexBox,
  BannerBlock,
  BannerText,
} from "../../styles/Memories/Styles";
import MemoryCard from "./MemoryCard";
const Memories = () => {
  const memoryData = [
    {
      heading: "",
      description: "",
    },
  ];

  return (
    <MemoryBody>
      <ElementCenter>
        <HeadingTitle>Past Memories</HeadingTitle>
      </ElementCenter>
      <div className="grid mt-12 md:grid-cols-3 sm:grid-cols-1 gap-8">
        <div className=" flex justify-center">
          <MemoryCard className="" />
        </div>
        <div className=" flex justify-center">
          <MemoryCard className="" />
        </div>
        <div className=" flex justify-center">
          <MemoryCard className="" />
        </div>
      </div>
    
    </MemoryBody>
  );
};

export default Memories;
