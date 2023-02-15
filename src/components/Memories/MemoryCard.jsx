import React from "react";
import { MCard, MCardHeading, MCardText } from "../../styles/Memories/Styles";
import memoryImg from "../../images/Memory.png";
import { CardDesc, CardTitle } from "../../styles/RegisterCards/Styles";
const MemoryCard = () => {
  return (
    <MCard className="">
      <img src={memoryImg} alt="Memory" />
      <div className="text-center mt-4">
        <CardTitle>NUV - Deep</CardTitle>
        <CardDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </CardDesc>
      </div>
    </MCard>
  );
};

export default MemoryCard;
