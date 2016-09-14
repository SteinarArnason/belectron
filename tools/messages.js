/* eslint-disable no-console */
import colors from 'colors';

export const DevStart = () => {
  console.log(colors.green('-----------------------------\n     Dev Server starting     \n-----------------------------'));
};

export const DevStop = () => {
  console.log(colors.red('-----------------------------\n     Dev Server stopping     \n-----------------------------'));
};
