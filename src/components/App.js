import React from "react";
import Sort from "./Sort/Sort";
import Toolbar from "./Toolbar/Toolbar";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };

    this.generateArray = this.generateArray.bind(this);
  }
  
  generateArray() {
    const array = [];

    for (let i = 0; i < 200; i++) {
      array.push(generateRandomNum(100, 500));
    }

    this.setState({array});
  }

  render() {
    return (
      <div className="app">
        <Toolbar generateArray={() => this.generateArray} />
        <Sort array={this.state.array} />
      </div>
    );
  }
}

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
