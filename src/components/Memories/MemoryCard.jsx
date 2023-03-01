import React from "react";
import { MCard, MCardHeading, MCardText } from "../../styles/Memories/Styles";
import { CardDesc, CardTitle } from "../../styles/RegisterCards/Styles";
const MemoryCard = ({ title, description, image }) => {
  return (
    <MCard className="">
      <img src={image?.length > 0 ? image : '/images/Memory.png'} alt="Memory" className="rounded-2xl"/>
      <div className="text-center mt-4 ">
        <h4 className="text-white text-3xl md:text-2xl">{title}</h4>
        <h6 className="text-white text-lg mt-2 md:text-sm">{description}</h6>
      </div>
    </MCard>
  );
};

export default MemoryCard;
