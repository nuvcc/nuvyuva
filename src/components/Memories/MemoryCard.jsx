import React from "react";
import { MCard, MCardHeading, MCardText } from "../../styles/Memories/Styles";
import memoryImg from "../../images/Memory.png";
import { CardDesc, CardTitle } from "../../styles/RegisterCards/Styles";
const MemoryCard = ({ title, description, image }) => {
  return (
    <MCard className="">
      <img src={image?.length > 0 ? image : memoryImg} alt="Memory" />
      <div className="text-center mt-4">
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>
      </div>
    </MCard>
  );
};

export default MemoryCard;
