/* eslint-disable no-console, import/default*/
import colors from 'colors';
import webpack from 'webpack';
import electronConfig from '../webpack.electron.config';
import productionConfig from '../webpack.production.config';

console.log(colors.green('----------------------------------'));
console.log(colors.green(' Starting webpack build process.. '));
console.log(colors.green('       Please be patient :)       '));
console.log(colors.green('----------------------------------'));

webpack(productionConfig).run((webpackError, stats) => {
  if (webpackError) {
    console.log(colors.red.bold(webpackError));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.log('hasErrors');
    return jsonStats.errors.map((error) => { return console.log(error.erd); });
  }

  if (jsonStats.hasWarnings) {
    console.log('hasWarnings');
    jsonStats.warnings.map((warning) => { return console.log(warning.yellow); });
  }

  console.log(colors.green('   ----------------------------'));
  console.log(colors.green('       React bundle created    '));
  console.log(colors.green('   ----------------------------'));
});

webpack(electronConfig).run((webpackError, stats) => {
  if (webpackError) {
    console.log(colors.red.bold(webpackError));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.log('hasErrors');
    return jsonStats.errors.map((error) => { return console.log(error.erd); });
  }

  if (jsonStats.hasWarnings) {
    console.log('hasWarnings');
    jsonStats.warnings.map((warning) => { return console.log(warning.yellow); });
  }

  console.log(colors.green('   ----------------------------'));
  console.log(colors.green('       Electron minified       '));
  console.log(colors.green('   ----------------------------'));
});
