import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    this.message = 'Time to start your react journey! Have fun :)';
    return (
      <div>
        { this.message }
      </div>
    );
  }
}
