import React, { Component } from 'react';
import './App.css';

// Importing the Validation Component
import Validation from "./Validation/Validation";

// Importing the Char Component
import Char from "./Char/Char";


class App extends Component {

  /**
   * Initial state of the App
   */
  state = {
    text: ""
  };


  /**
   * Input change handler
   */
  inputChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    });
    console.log(event.target.value);
  }

  removeCharHandler = (charIndex) => {
    // creating a new string
    const newStringArray = this.state.text.slice().split("");

    newStringArray.splice(charIndex, 1);

    const updatedString = newStringArray.join("");

    // other way of doing it
    // newString = newString.split("").splice(charIndex, 1, "").join("");
    // console.log("the new string is: "+ newString);

    // replace the character with ''
    // newString = newString.slice(0, charIndex) + newString.slice(charIndex+1, newString.length);

    // set the new state
    this.setState({
      text: updatedString
    });
  }

  render() {

    let characters = null;

    if(this.state.text.length !== 0) {
      characters = (
        <div>
          { this.state.text.split('').map((char, index) => {
              return <Char 
                  value={ char } 
                  key={ index }
                  remove={ this.removeCharHandler.bind(this, index) }
                />
          }) }
        </div>
      );
    }

    return (
      <div>
        <label htmlFor="prompt">Enter Text:</label>
        <input name="prompt" type="text" onChange={ this.inputChangeHandler }  value={ this.state.text }/>
        <p> The text is: { this.state.text } </p>
        <p> The text length is: { this.state.text.length } </p>
        <Validation textLength={ this.state.text.length }/>
        { characters }
      </div>
    );
  }
}

export default App;
