import React, { Component } from 'react';
import './App.css';
import Review from './Review'

class App extends Component {
  state = {
    reviews: [
      { id: '1', title: 'Max', text: 28, likes: 0 },
    ],
  }

  likedHandler = ( event, id ) => {
    const reviewIndex = this.state.reviews.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  //CURRENT STATE
  likesHandler = (reviewIndex) => {
    const reviews = [...this.state.reviews];
    selectedReview = reviews[reivewsIndex];
    if(liked){
    } else {

    }
    selectedReview.likes = 
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    const reviewList = this.state.reviews.map((item, index) => {
        return <Review 
        key={index} 
        id={item.id}
        title={item.title}
        text={item.text}
        likes={item.likes}
        clicked = {() => this.likesHandler(index)}/>;
      })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
      </div>
    );
  }
}

export default App;
