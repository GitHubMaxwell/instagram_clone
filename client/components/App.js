import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main.js";
export default class App extends Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={Main} />
      </HashRouter>
    );
  }
}
