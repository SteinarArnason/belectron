import webpack from 'webpack';
import merge from 'webpack-merge';
import config from './webpack.base.config';

const GLOBALS = {
  __DEV__: false,
  'process.env.NODE_ENV': JSON.stringify('production'),
};

export default merge(config, {
  // devtool: 'source-map',
  target: 'electron-main',

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ 'babel' ], exclude: /node_modules/ },
    ],
  },

  entry: [
    'babel-polyfill',
    './electron/main',
  ],

  output: {
    publicPath: 'dist',
    filename: 'main.js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.BannerPlugin(
    //   'require("source-map-support").install();',
    //   { raw: true, entryOnly: false }
    // ),
    new webpack.DefinePlugin(GLOBALS),
  ],

  node: {
    __dirname: false,
    __filename: false
  },

  externals: [
    // 'source-map-support'
  ],

});
