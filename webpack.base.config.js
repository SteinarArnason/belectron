import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssVariables from 'postcss-css-variables';

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

  postcss: [
    postcssImport({ path: 'app' }),
    postcssVariables,
    autoprefixer,
  ],
};
