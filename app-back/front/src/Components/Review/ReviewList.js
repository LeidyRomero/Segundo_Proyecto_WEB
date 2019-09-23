import React, { Component } from "react";
import Review from "./Review";
import axios from "axios";

class App extends Component {
  state = {
    reviews: []
  };

  constructor(props) {
    super(props);
    axios.get(`http://localhost:3000/reviews`).then(res => {
      const reviews = res.data;
      console.log("These are the reviews")
      console.log(reviews)
      this.populateState(reviews);
    });

    switch (props.select) {
      case "financing":
        axios
          .get(`https://localhost:3000/reviews/financing/` + props.id)
          .then(res => {
            const reviews = res.data;
            this.populateState(reviews);
          });
        break;
      case "scholarhip":
        axios
          .get(`https://localhost:3000/reviews/scholarship/` + props.id)
          .then(res => {
            const reviews = res.data;
            this.populateState(reviews);
          });
        break;
      default:
    }
  }

  populateState = async function(data) {
    console.log(this.state);
    await this.setState({ reviews: data });
    console.log(this.state);
  };

  //CURRENT STATE
  /*
  likesHandler = reviewIndex => {
    const reviews = [...this.state.reviews];
    selectedReview = reviews[reivewsIndex];
    if (liked) {
    } else {
    }
    selectedReview.likes = this.setState({ persons: persons });
  };
  */

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
          key={item._id}
          id={item.id}
          title={item.title}
          text={item.text}
          score={item.score}
          likes={item.likes}
          clicked={() => this.likesHandler(index)}
        />
      );
    });

    return <div className="App"> <h2>Reviews</h2>{reviewList}</div>;
  }
}

export default App;
