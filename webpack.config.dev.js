const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HotModuleReplacementPlugin = require("html-webpack-plugin");
// or put --hot flag in the script
// has a problem with NoErrorsPlugin
// const NoErrorsPlugin = require("");
// related to eslint webpack plugin

// cant use import ??? even with babel polyfill?
// import path from "path";
// import webpack from "webpack";
// import HtmlWebpackPlugin from "html-webpack-plugin";

// changed css loaders to sass but need stylus loader

// could this be export default {...}
module.exports = {
  devtool: "source-map",
  entry: ["webpack-hot-middleware/client", "./client/instagram_clone"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include: path.join(__dirname, "client")
      },
      // CSS
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "client"),
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          }
        ]
      }
    ]
  }
};
