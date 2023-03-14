import { useEffect, useState } from "react";
import {
  DropContainer,
  DropList,
  DropListItems,
  DropMenu,
  DropText,
} from "./Style";

const DropDown = ({ show, link1, link2 }) => {
  return (
    <DropMenu>
      {/* <DropText>Register Now</DropText> */}
      <DropContainer hidden={!show}>
        <DropList>
          <DropListItems>2d</DropListItems>
          <DropListItems>3d</DropListItems>
        </DropList>
      </DropContainer>
    </DropMenu>
  );
};

export default DropDown;
