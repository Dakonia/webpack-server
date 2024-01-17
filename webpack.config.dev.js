const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
/* global require, module, __dirname */

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'src'),
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
};
