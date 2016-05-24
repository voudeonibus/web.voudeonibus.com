'use strict'

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const lost = require('lost')
const fontMagician = require('postcss-font-magician')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'src/js/index.js')
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
    return [autoprefixer, lost, fontMagician]
  }
}
