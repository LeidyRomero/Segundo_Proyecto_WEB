import React from "react";
import moment from "moment";
import { Card, Button } from "react-bootstrap";

const Financing3 = props => {

  const style ={
    width: "18rem",
    marginBottom: "3em"
  }
  const mom_start = moment(new Date(props.start_date)).format("YYYY-MM-DD");
  const mom_end = moment(new Date(props.end_date)).format("YYYY-MM-DD");


  return (
    <div>
      <Card style={style}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text> Inicia en  {mom_start} y termina en {mom_end}{" "}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Financing3;
