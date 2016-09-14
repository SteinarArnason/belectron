/* eslint-disable no-console, no-process-exit */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.dev.config';
import { DevStart, DevStop } from './messages';

const PORT = 3000;
const app = express();
const compiler = webpack(config);

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

const server = app.listen(PORT, 'localhost', (error) => {
  if (error) {
    console.error(error);
    return;
  }
  DevStart();
  console.log(`Listening at http://localhost:${ PORT }`);
});

process.on('SIGTERM', () => {
  DevStop();
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  DevStop();
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
