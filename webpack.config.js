var path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
  },
  module: {
    loaders: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};
