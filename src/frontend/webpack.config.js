const HtmlWebpackPlugin = require('html-webpack-plugin');

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const babelOptions = require('./babel.config');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "public/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html"
    })
  ]
};
