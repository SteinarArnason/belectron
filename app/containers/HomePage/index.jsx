import React, { Component } from 'react';

import styles from './index.css';

export default class HomePage extends Component {
  render() {
    this.message = 'Time to start your react journey! Have fun :)';
    return (
      <div className={ styles.greenBackground }>
        { this.message }
      </div>
    );
  }
}
