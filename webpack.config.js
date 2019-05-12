const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputDirectory = "dist";

module.exports = {
  entry: "./src/client/index.jsx",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.es6', '.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: { "/api": "http://localhost:8080" }
  },
  plugins: [
    new CleanWebpackPlugin([ outputDirectory ]),
    new HtmlWebpackPlugin({
      hash: true,
      language: 'en',
      inject: true,
      title: 'Infuse',
      filename: 'index.html',
      template: "./public/index.tmp.html",
      favicon: "./public/favicon.ico",
      pageHeader: 'Infuse Starter Kit'
    }),
    new CopyWebpackPlugin([
      { from:'./public/style.css', to:'./' }
    ])
  ]
};
