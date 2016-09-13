/* eslint-disable no-console */
import colors from 'colors';

const message = () => {
  console.log(colors.green('-------------------'));
  console.log(colors.green('      Message      '));
  console.log(colors.green('-------------------'));
};

module.exports = {
  message,
};
