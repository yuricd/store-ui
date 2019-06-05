import React, { Component } from 'react';
import './ProductCard.scss';
import Button from '../Button/Button';

import product1 from  '../../../images/product1.png';

export default class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <a href={this.props.to}>
          <div className="product-card__picture">
            <img src={product1} alt="T-Shirt" />
          </div>
        </a>
        <div className="product-card__content">
          <a href={this.props.to}>
            <div>
              <h4>Chilly T-Shirt</h4>
              <span className="product-card__price">US$ 17.96</span>
              <div className="tags small">
                <span>Nerd</span>
                <span>T-Shirt</span>
                <span>Cool</span>
              </div>
            </div>
          </a>
          <div className="bottom-actions">
            <Button type="button" classes="btn green cart"><i className="fas fa-shopping-cart" /> Add to cart</Button>
            <Button type="button" classes="btn red wishlist"><i className="fas fa-heart" /></Button>
          </div>
        </div>
      </div>
    )
  }
}