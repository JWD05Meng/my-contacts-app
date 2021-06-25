import React, { Component } from "react";
const ReactDOM = require("react-dom");

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => { return {counter: prevState.counter + 1}});
  }


  render() {
    return (
      <div>
        <div style={{ 'font-size': '4rem' }}>
          {this.state.counter}
        </div>

        <button onClick={this.clickHandler}>Change!</button>
      </div>
    );
  }
}