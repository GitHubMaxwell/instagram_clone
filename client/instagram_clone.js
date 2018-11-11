// import "@babel/polyfill";
// have to put this here or all the import and ES6 syntax will break the build process??

import React from "react";
import { render } from "react-dom";

// Import CSS
// import css from "./styles/style.styl";

// Import Components
import App from "./components/App.js";
// import Main from "./components/Main.js";
// import Single from "./components/Single.js";
// import PhotoGrid from "./components/PhotoGrid.js";

// Import react router deps
// import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";

// const router = (
//   <Router history={browserHistory}>
//     <Route path="/" component={Main} />
//     <Route path="/grid" component={PhotoGrid} />
//     <Route path="/single" component={Single} />
//   </Router>
// );

render(<App />, document.getElementById("root"));
// render(<Main />, document.getElementById("root"));
