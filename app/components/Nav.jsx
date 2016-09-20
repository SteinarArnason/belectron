import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from './Nav.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className={ styles.div }>
        <IndexLink to="/" activeClassName={ styles.active } >{ 'Home' }</IndexLink>
        { " | " }
        <Link to="/information" activeClassName={ styles.active } >{ 'Information' }</Link>
      </div>
    );
  }
}
