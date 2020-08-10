import React from "react";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [] /* Construteur avec une array qui sera trié */,
    };
  }

  componentWillMount() {
    //Lorsque l'application démmare --> l'array est déja initializé
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  render() {
    // Afficher l'array
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}>
            {value}
          </div>
        ))}
      </div>
    );
  }
}

/* Fonction pour génerer des nombre aléatoire sur une intervale donné */

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
