import path from 'path';

export default {
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
