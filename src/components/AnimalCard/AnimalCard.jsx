import React, { Component } from "react";
import "./AnimalCard.css";

import animals from "../../animals";

class AnimalCard extends Component {
  render() {
    return (
      <div className="AnimalCard-container">
        <h2>{animals[0].name}</h2>
        <img
          className="animal-img"
          src={animals[0].img}
          alt={animals[0].name}
        />
      </div>
    );
  }
}

export default AnimalCard;
