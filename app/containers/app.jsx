import React, { Component, PropTypes } from 'react';

import Nav from 'components/Nav';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
