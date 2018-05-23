'use strict';

const webpack = require('webpack');

module.exports = {
    entry: './js/controller/app.js',
    output: {
      filename: 'build.js'
    },

    watch: true,

    watchOptions: {
      aggregateTimeout: 100
    },

    devtool: "source-map",

    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery/dist/jquery.min.js",
        jQuery: "jquery/dist/jquery.min.js",
        "window.jQuery": "jquery/dist/jquery.min.js"
      }),
      new webpack.ProvidePlugin({
        moment: "moment/moment.js",
      }),

    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loader: "babel-loader",
          query: {
              presets: ['es2015', 'react']
          }
        }
      ]
    }

  };