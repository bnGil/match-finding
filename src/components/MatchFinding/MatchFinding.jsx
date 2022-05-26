import React, { Component } from "react";
import "./MatchFinding.css";

import Counter from "../Counter/Counter";
import AnimalCard from "../AnimalCard/AnimalCard";
import Button from "../Button/Button";

class MatchFinding extends Component {
  render() {
    return (
      <div className="page">
        <div className="counters-container">
          <Counter emoji="happy" />
          <Counter emoji="sad" />
        </div>
        <AnimalCard />
        <div className="btns-container">
          <Button type="no" />
          <Button type="yes" />
        </div>
      </div>
    );
  }
}

export default MatchFinding;
