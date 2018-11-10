import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import Deck from "./Deck.js";

// maybe the code splitting in index.js messing up routes?

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "????"
    };
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Menu current={this.state.current} />
          <Route exact path="/" component={Home} />
          <Route exact path="/deck" component={Deck} />

          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
}
