import React, { useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { memberData } from "./list";
import "../../styles/style.css";

const Members = () => {
  const [Data, setData] = useState(memberData);

  const styles = {
    box: {
      padding: "1rem 4rem ",
    },

    col_card: {
      display: "flex",
      justifyContent: "center",
      alignItem: "center",

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
      marginBottom: " 2rem",
    },
    subtitle: {
      color: " #f3f3f7",
      fontSize: "2rem",
      fontHeight: 700,
      letterSpacing: " 1.4px",
      textTransform: "uppercase",
      marginBottom: " 2rem",
    },
    card: {
      width: "21rem",
      borderBottomRightRadius: "16px",
      borderBottomLeftRadius: "16px",
      backgroundColor: "#000000",
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
  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.title}>The Team</h2>
      </div>
      <div style={styles.box} className="team-cat">
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Presidents</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 2).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <Col style={styles.col_card} md={4} lg={true} sm={12} xs={12} key={id}>
                <Card style={styles.card} className="card">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    height="350rem"
                    src={imgSrc}
                  />
                  <Card.Body style={styles.card_body}>
                    <Card.Title style={styles.card_title}>{name}</Card.Title>
                    <Card.Title style={styles.card_subtitle}>
                      {postion}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
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
              <Col style={styles.col_card} md={4} lg={4} sm={12} xs={12} key={id}>
                <Card style={styles.card} className="card">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    height="350rem"
                    src={imgSrc}
                  />
                  <Card.Body style={styles.card_body}>
                    <Card.Title style={styles.card_title}>{name}</Card.Title>
                    <Card.Title style={styles.card_subtitle}>
                      {postion}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Commitee Heads</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 3).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <Col style={styles.col_card} md={4} lg={true} sm={12} xs={12} key={id}>
                <Card style={styles.card} className="card">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    height="350rem"
                    src={imgSrc}
                  />
                  <Card.Body style={styles.card_body}>
                    <Card.Title style={styles.card_title}>{name}</Card.Title>
                    <Card.Title style={styles.card_subtitle}>
                      {postion}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
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
              <Col style={styles.col_card} md={4} lg={true} sm={12} xs={12} key={id}>
                <Card style={styles.card} className="card">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    height="350rem"
                    src={imgSrc}
                  />
                  <Card.Body style={styles.card_body}>
                    <Card.Title style={styles.card_title}>{name}</Card.Title>
                    <Card.Title style={styles.card_subtitle}>
                      {postion}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Members;
