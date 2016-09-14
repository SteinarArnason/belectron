import path from 'path';

export default {
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ 'babel' ], exclude: /node_modules/ },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    modulesDirectories: [ 'node_modules', 'app' ],
    extensions: [ '', '.js', '.jsx', '.css' ],
  },
};
