/* eslint-disable no-console */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.dev.config';

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  profile: true,
  progress: true,
  noInfo: true,
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

  console.log(`Listening at http://localhost:${ PORT }`);
});

process.on('SIGINT', () => {
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
