const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'bundle': './src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    port: 6565,
    compress: true,
    stats: 'errors-only',
    historyApiFallback: { index: 'index.html' },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|woff|woff2|ttf)$/,
        use: [{ loader: 'file-loader?name=[name].[ext]' }],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
