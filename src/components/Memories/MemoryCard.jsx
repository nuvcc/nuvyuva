import React from "react";
import { MCard, MCardHeading, MCardText } from "../../styles/Memories/Styles";
import { CardDesc, CardTitle } from "../../styles/RegisterCards/Styles";
const MemoryCard = ({ title, description, image }) => {
  return (
    <MCard className="">
      <img src={image?.length > 0 ? image : '/images/Memory.png'} alt="Memory" />
      <div className="text-center mt-4">
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>
      </div>
    </MCard>
  );
};

export default MemoryCard;
