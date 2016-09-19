import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes';
import styles from 'global.css'; // eslint-disable-line

render(
  <Router history={ hashHistory } routes={ routes } />,
  document.getElementById('app')
);
