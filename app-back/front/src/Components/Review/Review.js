import React from "react";
import { Card, Button } from "react-bootstrap";

const review = () => {
  let score = "";

  return (
    <div>
      <Card bg="light" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Juliana Prieto</Card.Title>
          <Card.Subtitle className="text-muted">4.5</Card.Subtitle>
          <br />
          <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
          <Button variant="primary">Recomendar</Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default review;
