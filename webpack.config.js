// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "./index.tsx"),
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".ts", ".tsx", ".js"],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./dist/index.html",
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDom",
  },
};
