import webpack from 'webpack';
import merge from 'webpack-merge';
import config from './webpack.base.config';

const PORT = process.env.PORT || 3000;

const GLOBALS = {
  __DEV__: true,
  'process.env.NODE_ENV': JSON.stringify('development'),
};

const cssLoader = 'css-loader?modules' +
                  '&importLoaders=1' +
                  '&localIdentName=[path][name]__[local]___[hash:base64:5]' +
                  '!postcss-loader';

export default merge(config, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  target: 'electron-renderer',

  entry: [
    'babel-polyfill',
    `webpack-hot-middleware/client?path=http://localhost:${ PORT }/__webpack_hmr`,
    './app/index',
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [ 'react-hmre' ],
        },
      },
      { test: /\.css$/, loaders: [ 'style-loader', cssLoader ] },
    ],
  },

  output: {
    publicPath: `http://localhost:${ PORT }/dist/`,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
  ],

});
