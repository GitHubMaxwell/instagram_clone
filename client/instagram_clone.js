// import "@babel/polyfill";
// have to put this here or all the import and ES6 syntax will break the build process
import React from "react";
import { render } from "react-dom";
// import Main from "./components/Main.js";
import App from "./components/App.js";

// import css
// import css from "./styles/style.styl";

render(<App />, document.getElementById("root"));
