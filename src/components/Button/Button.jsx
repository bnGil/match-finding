import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return <div className={`btn ${this.props.type}`}></div>;
  }
}

export default Button;
