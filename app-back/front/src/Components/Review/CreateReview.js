import React, { Component } from "react";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import "./Review.css";

class CreateReview extends Component {
  state = {
    title: "",
    text: "",
    score: 0,
    likes: 0
  };

  handleText = event => {
    this.setState({ text: event.target.value });
  };

  handleScore = event => {
    let newScore = Number(event.target.value);
    this.setState({ score: newScore });
  };

  printState = () =>{
      console.log(this.state)
  }

  render() {
    return (
      <div>
        <Card className="review">
          <Card.Body>
            <Container>
              <Row>
                <Col xs sm md lg={3} className="d-flex flex-row-reverse">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect01"
                        id="label-selector"
                      >
                        <i className="fas fa-star"></i>
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      onChange={this.handleScore}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col id="col-review-text">
                  <br />
                  <Card.Text>
                    <textarea
                      id="text"
                      type="text"
                      placeholder="Describe tu experiencia"
                      rows="3"
                      onChange={this.handleText}
                    ></textarea>
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-row-reverse">
                  <Button className="but-cancelar" onClick={this.printState}>Cancelar</Button>
                  <Button className="but-guardar">Guardar</Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default CreateReview;
