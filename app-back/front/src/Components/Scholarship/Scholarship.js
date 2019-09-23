import React from "react";
import { Card, Button } from "react-bootstrap";

const Scholarship = props => {
  const style ={
    width: "18rem",
    marginBottom: "3em"
  }
  return (
    <div>
      <Card style={style}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">
            <a href={props.webpage}>Ver detalles</a>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Inicia en {props.start_date} y termina en {props.end_date}{" "}
        </Card.Footer>
      </Card>
    </div>
  );
};
export default Scholarship;
