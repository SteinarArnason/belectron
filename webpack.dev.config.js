/* eslint-disable no-console */
import webpack from 'webpack';
import merge from 'webpack-merge';
import config from './webpack.base.config';

const PORT = 3000;

export default merge(config, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${ PORT }/__webpack_hmr&reload=true`,
    'babel-polyfill',
    './app/index'
  ],

  output: {
    publicPath: `http://localhost:${ PORT }/dist/`
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ]

});
