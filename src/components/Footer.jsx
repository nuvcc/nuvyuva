import React from "react";
import { FooterDiv } from "../styles/Home/Styles";

const Footer = () => {
  return (
    <FooterDiv>
      © NUV Yuva 2023 All rights reserved.{" "}
      <a target="_blank"  href="/document/privacy_policy.pdf">Privacy Policy </a> .
      <a target="_blank" href="/document/refund_policy.pdf">Refund Policy</a>{" "}
    </FooterDiv>
  );
};

export default Footer;
