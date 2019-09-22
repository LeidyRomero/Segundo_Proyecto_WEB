import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "./Review.css";

const review = (props) => {
  let score = "";

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  return (
    <div>
      <Card className="review">
        <Card.Body>
          <Container>
            <Row>
              <Col xs sm md lg={10}>
                <Card.Title>Juliana Prieto</Card.Title>
              </Col>
              <Col xs sm md lg={2} className="d-flex flex-row-reverse">
                <Card.Subtitle className="text-muted">
                  4.5 <i className="fas fa-star"></i>
                </Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col id="col-text">
                <br />
                <Card.Text>{text}.</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-row-reverse">
                <h6 id="likes">15</h6>
                <i className="far fa-thumbs-up" onClick={props.clicked}></i>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default review;
