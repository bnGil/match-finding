import React, { Component } from "react";

import "./AnimalCard.css";

class AnimalCard extends Component {
  render() {
    return (
      <>
        {this.props.animal && (
          <div className="AnimalCard-container">
            <h2>{this.props.animal.name}</h2>
            <div
              className="animal-img"
              style={{ backgroundImage: `url(${this.props.animal.img})` }}
            ></div>
          </div>
        )}
      </>
    );
  }
}

export default AnimalCard;
