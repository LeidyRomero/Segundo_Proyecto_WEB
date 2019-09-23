import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import axios from "axios";
import Financing3 from "./financing3";

class FinancingList3 extends Component {
  state = { 
      financing: [],
      showItems: 3
    };

  constructor(props) {
    super(props);
    axios.get(`http://localhost:3000/financing`).then(res => {
      const financing = res.data;
      this.populateState(financing)
    });
  }

  populateState = async function(data) {
    await this.setState({financing: data});
  }
  

  render() {
    const financingItems = this.state.financing.slice(0, this.state.showItems).map((item, index) => {
        
            return (
                <Financing3
                name={item.name}
                description={item.description}
                image={item.image}
                webpage={item.webpate}
                start_date={item.start_date}
                end_date={item.end_date}
                key={index}
                />
            );
        
    });

    return (
      <div className="App">
        <Container fluid={true}>
          <CardDeck className="text-center">
            {financingItems}
        </CardDeck>
        </Container>
      </div>
    );
  }
}

export default FinancingList3;
