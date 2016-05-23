'use strict'

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const lost = require('lost')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/js/index.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(scss|sass|css)$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }, {
      test: /\.(png|jpe?g|svg|gif)$/,
      loaders: [
        'url-loader?limit=8192'
      ]
    }],

    resolve: {
      extensions: ['', '.js', '.scss', '.sass']
    }
  },

  postcss: function () {
    return [autoprefixer, lost]
  }

}
