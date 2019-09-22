import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "./Review.css";

const createReview = props => {
  let score = "";

  const text = "";

  return (
    <div>
      <Card className="review">
        <Card.Body>
          <Container>
            <Row>
              <Col xs sm md lg={2} className="d-flex flex-row-reverse">
                <Card.Subtitle className="text-muted">
                  4.5 <i className="fas fa-star"></i>
                </Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col id="col-text">
                <br />
                <Card.Text>
                  <input id="text" type="text" placeholder="Describe tu experiencia" />
                </Card.Text>
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

export default createReview;
