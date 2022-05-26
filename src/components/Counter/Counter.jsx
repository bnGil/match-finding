import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter-container">
        <img
          src={require(`../../assets/images/${this.props.emoji}.png`)}
          width="50px"
          alt="emoji"
        />
        <h2>0</h2>
      </div>
    );
  }
}

export default Counter;
