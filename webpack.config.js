const path = require('path');
const webpack = require('webpack');

module.exports = [{
  name: 'js',
  entry: './js/main.jsx',
  output: { path: './js/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
   }
}];
