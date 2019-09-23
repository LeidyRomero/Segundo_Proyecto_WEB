import React from "react";
import moment from "moment";
import { Card, Button } from "react-bootstrap";

const Financing = props => {
  const style ={
    width: "18rem",
    marginBottom: "3em"
  }

  const mom_start = moment(new Date(props.start_date)).format("YYYY-MM-DD");
  const mom_end = moment(new Date(props.end_date)).format("YYYY-MM-DD");

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
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
          Inicia en  {mom_start} y termina en {mom_end}{" "}
        </Card.Footer>
      </Card>
    </div>
  );
};
export default Financing;
