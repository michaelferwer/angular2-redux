var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
//const autoprefixer = require('autoprefixer');

const APP_DIRECTORY = 'src';

module.exports = {
  entry: {
    'polyfills': './'+APP_DIRECTORY+'/polyfills.ts',
    'vendor': './'+APP_DIRECTORY+'/vendor.ts',
    'app': './'+APP_DIRECTORY+'/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root(APP_DIRECTORY, 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root(APP_DIRECTORY, 'app'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        exclude: helpers.root(APP_DIRECTORY, 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      },
      {
        test: /\.scss$/,
        include: helpers.root(APP_DIRECTORY, 'app'),
        loaders: ['raw', 'sass?sourceMap']
      }

    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: APP_DIRECTORY+'/index.html'
    })
  ]
};
