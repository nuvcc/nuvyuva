import React, { useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { memberData } from "./list";
import "../../styles/style.css";
import MemCard from "./MemCard";

export const styles = {

  wholeComponent:{
    backgroundColor:"#000015",
    paddingTop:"20px"
  },

  box: {
    padding: "1rem 4rem ",
  },

  col_card: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    margin:"1rem",
    padding: "0.8rem",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  title: {
    color: " #f3f3f7",
    fontSize: "3rem",
    fontHeight: 700,
    letterSpacing: " 1.4px",
    textTransform: "uppercase",
  },
  subtitle: {
    color: " #f3f3f7",
    fontSize: "2rem",
    fontHeight: 700,
    letterSpacing: " 1.4px",
    textTransform: "uppercase",
    marginBottom: " 3rem",
  },
  card: {
    width: "21rem",
    borderBottomRightRadius: "16px",
    borderBottomLeftRadius: "16px",
    backgroundColor: "#130735",
    boxShadow: "0 0 1rem 0 #d941c0",
    padding: "0rem",
  },
  card_title: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: " #f3f3f7",
  },
  card_subtitle: {
    fontFamily: "'Courier New' , monospace ",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: " #f3f3f7",
  },
};

const Members = () => {
  const [Data, setData] = useState(memberData);

  return (
    <div style={styles.wholeComponent}>
      <div style={styles.header}>
        <h2 style={styles.title}>The Team</h2>
      </div>
      <div style={styles.box} className="team-cat">
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Presidents</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 2).map((val, index) => {

            return (
              <MemCard data={val} />
            );
          })}
        </Row>
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Student Coordinators</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 1).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} />

            );
          })}
        </Row>

        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Committee Heads</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 3).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} />

            );
          })}
        </Row>
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Faculty COORDINATORS</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 4).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} />
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Members;
