'use strict'

var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var lost = require('lost')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'src/js/main.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(scss|sass)$/,
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
