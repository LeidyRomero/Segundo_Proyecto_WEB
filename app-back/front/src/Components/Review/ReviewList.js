import React, { Component } from "./node_modules/react";
import "./App.css";
import Review from "./Review";
import axios from "axios";

class App extends Component {
  state = {
    reviews: []
  };

  constructor(props){
    super(props);
    switch (props.select) {
      case "financing":
          axios.get(`https://localhost:3000/reviews/financing/`+ props.id).then(res => {
            const reviews = res.data;
            this.setState({ reviews });
          });
        break;
      case "scholarhip":
          axios.get(`https://localhost:3000/reviews/scholarship/`+ props.id).then(res => {
            const reviews = res.data;
            this.setState({ reviews });
          });
        break;
    }
  }

  //CURRENT STATE
  likesHandler = reviewIndex => {
    const reviews = [...this.state.reviews];
    selectedReview = reviews[reivewsIndex];
    if (liked) {
    } else {
    }
    selectedReview.likes = this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    const reviewList = this.state.reviews.map((item, index) => {
      return (
        <Review
          key={index}
          id={item.id}
          title={item.title}
          text={item.text}
          score={item.score}
          likes={item.likes}
          clicked={() => this.likesHandler(index)}
        />
      );
    });

    return <div className="App">{reviewList}</div>;
  }
}

export default App;
