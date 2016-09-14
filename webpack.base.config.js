import path from 'path';

export default {
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ 'babel' ], exclude: /node_modules/ },
    ],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.css' ],
    modulesDirectories: [ 'node_modules', 'src' ],
  },

  target: 'electron-renderer',

  //postcss & cssloader stuff
};
