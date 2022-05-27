import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={`btn ${this.props.type}`}
      ></div>
    );
  }
}

export default Button;
