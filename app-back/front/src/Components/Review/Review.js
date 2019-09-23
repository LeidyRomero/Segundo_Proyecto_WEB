import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import "./Review.css";

const review = (props) => {
  return (
    <div>
      <Card className="review">
        <Card.Body>
          <Container>
            <Row>
              <Col xs sm md lg={10}>
                <Card.Title>{props.title}</Card.Title>
              </Col>
              <Col xs sm md lg={2} className="d-flex flex-row-reverse">
                <Card.Subtitle className="text-muted">
                <i className="fas fa-star"></i> {props.score}
                </Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col id="col-text">
                <br />
                <Card.Text>{props.text}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-row-reverse">
                <h6 id="likes">{props.likes}</h6>
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
