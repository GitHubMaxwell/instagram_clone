import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Main extends Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <Link to="/">
        <h1>Instagramclone</h1>
      </Link>
    );
  }
}