const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
      systemvars: true,
      defaults: false,
    }),
  ],
  node: {
    __dirname: false,
  },
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-webpack-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  node: {
    __dirname: false,
  },
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
};
