import React, { Component } from "react";

import "./MatchFinding.css";
import animals from "../../animals";
import Counter from "../Counter/Counter";
import AnimalCard from "../AnimalCard/AnimalCard";
import Button from "../Button/Button";

class MatchFinding extends Component {
  state = {
    animals: [],
    currAnimal: 0,
    yesCounter: 0,
    noCounter: 0,
    isGameEnded: false,
  };

  componentDidMount() {
    this.setState({ animals: animals });
  }

  handleNoClick = () => {
    this.setState((prevState) => {
      return {
        noCounter: prevState.noCounter + 1,
        currAnimal: prevState.currAnimal + 1,
        isGameEnded:
          prevState.currAnimal < prevState.animals.length - 1 ? false : true,
      };
    });
  };

  handleYesClick = () => {
    this.setState((prevState) => {
      return {
        yesCounter: prevState.yesCounter + 1,
        currAnimal: prevState.currAnimal + 1,
        isGameEnded:
          prevState.currAnimal < prevState.animals.length - 1 ? false : true,
      };
    });
  };

  displayEndMsg = () => {
    if (this.state.yesCounter > this.state.noCounter) {
      return <h1>You love animals. You are awesome!</h1>;
    } else {
      return <h1>Boooo you don't like animals enough!!</h1>;
    }
  };

  render() {
    return (
      <div className="page">
        {this.state.isGameEnded ? (
          this.displayEndMsg()
        ) : (
          <>
            <div className="counters-container">
              <Counter counter={this.state.noCounter} emoji="sad" />
              <Counter counter={this.state.yesCounter} emoji="happy" />
            </div>
            <AnimalCard animal={this.state.animals[this.state.currAnimal]} />
            <div className="btns-container">
              <Button type="no" onClick={this.handleNoClick} />
              <Button type="yes" onClick={this.handleYesClick} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MatchFinding;
