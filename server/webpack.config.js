const path = require('path');

const dist = './../build/api';

module.exports = {
  // devtool:'source-map',
  target: 'node',
  entry: './server/app.js',
  output: {
    path: path.join(__dirname, dist),
    filename: 'index.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};
