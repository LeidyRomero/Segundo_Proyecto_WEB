import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "./Review.css";

const review = () => {
  let score = "";

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
                  4.5 <i class="fas fa-star"></i>
                </Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col id="col-text">
                <br />
                <Card.Text id="text">Lorem ipsum dolor sit amet.</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-row-reverse">
                <h6 id="likes">
                    15
                </h6>
                <i class="far fa-thumbs-up"></i>
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
