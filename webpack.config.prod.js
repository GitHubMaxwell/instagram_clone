var path = require("path");
var webpack = require("webpack");
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  devtool: "source-map",
  entry: ["./client/instagram_clone"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  module: {
    rules: [
      // js/jsx
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
        test: /\.js$/,
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
