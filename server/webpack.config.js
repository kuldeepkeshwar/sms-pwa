const path = require('path');

const dist = './../build/';

module.exports = {
  target: 'node',
  entry: './server/app.js',
  output: {
    path: path.join(__dirname, dist),
    filename: 'server.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};
