import React, { Component } from 'react';
import './Side.scss';

export default class Side extends Component {
  render() {
    return (
      <div className="side">
        <div className="box cart"><i className="fas fa-shopping-cart" /></div>
        <div className="box wishlist"><i className="fas fa-heart" /></div>
      </div>
    );
  }
}

