import React, { Fragment, Component } from "react";
import Card from "./Card.js";

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1, 2, 3, 4, 5, 6]
    };
  }
  render() {
    return (
      <Fragment>
        <ul>
          {this.state.cards.map(cards => {
            return <Card key={cards} />;
          })}
        </ul>
      </Fragment>
    );
  }
}
