import React from "react";
import { Card, Button } from "react-bootstrap";

const Financing = props => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
           {props.description}
          </Card.Text>
          <Button variant="primary"><a href={props.webpage}>Ver detalles</a></Button>
          <Card.Footer className="text-muted">Inicia en {props.start_date} y termina en {props.end_date} </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Financing;
