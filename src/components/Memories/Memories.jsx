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
import { pastMemories } from "./../../data/pastMemories";
const Memories = () => {
  const memoryData = [...pastMemories];

  return (
    <MemoryBody>
      <ElementCenter>
        <HeadingTitle className="mt-20">Past Memories</HeadingTitle>
      </ElementCenter>
      <div className="grid mt-12 md:grid-cols-3 sm:grid-cols-1 gap-8">
        {memoryData.map((memory,i) => (
          <div key={i} className=" flex justify-center ">
            <MemoryCard className="" {...memory}  />
          </div>
        ))}
      </div>
    </MemoryBody>
  );
};

export default Memories;
