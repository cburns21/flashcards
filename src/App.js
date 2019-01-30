import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
import AppRouter from './components/router';

// import Data from './components/data';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        notecards: []      
    }
  }



  async componentDidMount() {
    const response = await fetch('http://localhost:3000')
    const json = await response.json()
  
    this.setState({notecards: json})
    this.generateFlashcard()
  }
  
  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateFlashcard = (e) => {
    console.log('generateFlashcard')
    const randomIndex = this.getRandomIntInclusive(this.state.notecards.length - 1)
    const randomCard = this.state.notecards[randomIndex]
    console.log(randomCard)
    this.setState({
      name: randomCard.name,
      description: randomCard.description,
      // tags: randomCard.tags,
      link: randomCard.link,
      // example: randomCard.example
    })
  }



  render() {
    console.log(this.state.notecards)
    return (
      <div className="App">
        <div className="row navbar justify-content-end pb-5">
          <ul className="nav">
          </ul>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
            <h1 className="pb-2">Flashcards!</h1>
            <div><AppRouter></AppRouter></div>
            <div className="flashcard">
              <p className="pb-2">An app for studying common JavaScript methods.</p>
              <button className="btn btn-danger btn-lg"  onClick={this.generateFlashcard}>Generate</button>
            </div>
            <div className="row justify-content-center">
              {this.state.name
                ? <Card
                description={this.state.description}
                tags={this.state.tags}
                example={this.state.example}
                /> 
                : '' } 
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Type response here:  </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
              <button className="btn btn-dark btn-sm" >Submit</button>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
