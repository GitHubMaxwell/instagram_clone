import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main.js";
import Single from "./Single.js";
import PhotoGrid from "./PhotoGrid.js";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route path="/" component={Main}>
            <Route path="/" component={PhotoGrid} />
            <Route path="/single" component={Single} />
          </Route>
        </Fragment>
      </HashRouter>
      //   {React.cloneElement(this.props.children, this.props)}
    );
  }
}
