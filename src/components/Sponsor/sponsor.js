import React from "react";
import Hackclub from "./images/Group 95.svg";
import SparkAR from "./images/Group 97.svg";
import CDS from "./images/Group 100.svg";
import GDC from "./images/Group 99.svg";
import MozNUV from "./images/Group 101.svg";
import Gameroo from "./images/Group 102.svg";
import Kanan from "./images/Kanan.svg";
import media1 from "./images/media1.png";
import media2 from "./images/media2.png";
import media3 from "./images/media3.png";
import media4 from "./images/media4.png";
import media5 from "./images/media5.png";
import sponsor1 from "./images/sponsor1.png";
import sponsor2 from "./images/sponsor2.jpg";
import sponsor3 from "./images/sponsor3.jpg";
import sponsor4 from "./images/sponsor4.jpeg";
import sponsor5 from "./images/sponsor5.png";
import sponsor6 from "./images/sponsor6.png";
import sponsor7 from "./images/sponsor7.png";
import sponsor8 from "./images/sponsor8.png";
import { zigzag } from "../images/circles/Zigzag.png";

import { useNavigate } from "react-router-dom";
import { Container, row, col } from "react-bootstrap";
import "./sponsor.css";
import { BiArrowBack } from "react-icons/bi";

import { HeadRow, BackButton } from "./sponsorElement";
const Circle1 = require("../images/circles/Circle1.png");

export const styles = {
  teamsSvgImg: {
    position: "absolute",
    top: "0rem",
    right: "37rem",
    width: "6rem",
    zIndex: "-1",
  },
};

const Sponsor = () => {
  const navigate = useNavigate();

  return (
    <div class="container-fluid">
      <HeadRow>
        <BackButton onClick={() => navigate(-1)}>
          <BiArrowBack />
        </BackButton>
      </HeadRow>
      <div class="title3" style={{ position: "relative", zIndex: 5 }}>
        <div style={{ position: "relative"}}>
          SPONSORS
          <img
            src={Circle1}
            className="circle-svgs"
            style={styles.teamsSvgImg}
            alt="circle-png"
          />
        </div>
      </div>
      <div class="title2">
        <p>TITLE SPONSOR</p>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <img src={Kanan} alt="kanan" className="kanan" />
        </div>
      </div>
      <div class="title">
        <p>MEDIA PARTNERS</p>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-4 col-sm-1">
          <img className="media" src={media2} alt="Media2" />
        </div>
      </div>
      <div class="title">
        <p>SPONSORS</p>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor1} alt="Sponsor1" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor2} alt="Sponsor2" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor3} alt="Sponsor3" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor4} alt="Sponsor4" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor5} alt="Sponsor5" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor6} alt="Sponsor6" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor7} alt="Sponsor7" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-1">
          <img className="image" src={sponsor8} alt="Sponsor8" />
        </div>
      </div>
      <div class="title">
        <p>COMMUNITY PARTNERS</p>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={SparkAR} alt="Spark AR" />
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={CDS} alt="Community of Data Science" />
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={GDC} alt="Google Developer Club" />
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={MozNUV} alt="Mozilla" />
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={Gameroo} alt="Mozilla" />
        </div>
        <div class="col-lg-2 col-md-4 col-sm-1">
          <img src={Hackclub} alt="Hackclub" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
