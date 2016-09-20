/* eslint-disable react/jsx-no-literals */
import React, { Component } from 'react';

import styles from './index.css';

export default class Information extends Component {
  render() {
    const NODE = process.version;
    const CHROME = process.versions.chrome;
    const ELECTRON = process.versions.electron;

    return (
      <div className={ styles.div }>
        <h1 className={ styles.h1 } >Groovy!</h1>
        <p>Your current node version is: <strong>{NODE}.</strong></p>
        <p>The boilerplate is running chromium version: <strong>{CHROME}.</strong></p>
        <p>Current electron version: <strong>{ELECTRON}.</strong></p>
      </div>
    );
  }
}
