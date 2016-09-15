import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import config from './webpack.base.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
  __DEV__: false,
  'process.env.NODE_ENV': JSON.stringify('production'),
};

export default merge(config, {
  // devtool: 'source-map',
  target: 'electron-renderer',

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ 'babel' ], exclude: /node_modules/ },
    ],
  },

  entry: [
    'babel-polyfill',
    './app/index',
  ],

  output: {
    publicPath: '',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Application Title',
      template: path.join(__dirname, './app/template.ejs'),
      filename: 'main.html',
      inject: false,
    }),
    new webpack.DefinePlugin(GLOBALS),
  ],

});
