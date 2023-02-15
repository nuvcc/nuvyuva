import React from "react";
import { FlexBox, MemoryBody, TextHeading } from "../../styles/Memories/Styles";
import MemoryCard from "./MemoryCard";
import { Container } from "../../styles/Home/Styles";
import { ElementCenter, HeadingTitle } from "../../styles/globalStyles";

const PastMemories = () => {
  return (
    <Container>
      <ElementCenter>
        <HeadingTitle>Past Memories</HeadingTitle>
      </ElementCenter>
      <FlexBox>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </FlexBox>
    </Container>
  );
};

export default PastMemories;
