import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
import Data from './components/data';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      flashcard: [],
      id: 0,
      name: '',
      description: '',
      example: '',
      tags: [],
      link: ''
    }
  }
  
  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateFlashcard = (e) => {
    const randomIndex = this.getRandomIntInclusive(this.state.data.length)
    const randomCard = this.state.data[randomIndex]
    this.setState({
      name: randomCard.name,
      description: randomCard.description,
      tags: randomCard.tags,
      link: randomCard.link
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row navbar justify-content-end pb-5">
          <ul className="nav">
          </ul>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
            <h1 className="pb-2">Flashcards!</h1>
            <p className="pb-2">An app for studying common JavaScript methods.</p>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Type response here  </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>
            <button className="btn btn-danger btn-lg" onClick={this.generateCard}>Submit</button>
          </div>
        </div> 
        <div className="row justify-content-center">
        {this.state.name
          ? <Card
          name= {this.state.name}
          description={this.state.description}
          tags={this.state.tags}
          link={this.state.link}
          /> 
          : '' }
          <Data></Data>
        </div>
      </div>
    );
  }
}

export default App;
