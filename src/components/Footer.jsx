import React from "react";
import { FooterDiv } from "../styles/Home/Styles";

const Footer = () => {
  return (
    <FooterDiv>
      © NUV युवा  2023 All rights reserved.{" "}
      <a target="_blank"  href="/document/privacy_policy.pdf">Privacy Policy </a> .
      <a target="_blank" href="/document/refund_policy.pdf">Refund Policy</a>{" "}
      <a target="_blank" href="https://drive.google.com/drive/folders/1g4ZgZ2bEbM5Dtqt8jLDpLlh3G4Q0I-Y8">Rules and Regulations</a>{" "}
    </FooterDiv>
  );
};

export default Footer;
