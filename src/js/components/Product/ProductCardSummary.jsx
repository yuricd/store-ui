import React, { Component } from 'react';
import './ProductCardSummary.scss';


export default class ProductCardSummary extends Component {
  render() {
    return (
      <div className="product-card-summary">
        <div className="product-card-summary__picture">
          <img src={this.props.picture} alt="Product" />
        </div>

        <div className="product-card-summary__info">
          <div className="product-card-summary__info__description">
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
          </div>

          <div className="product-card-summary__info__values">
            <div className="product-card-summary__info__values__quantity">
              <span className="title">Quantity</span>
              {(this.props.editable) ? (
                <input type="number" defaultValue={this.props.quantity} min="1" />
              ) : (
                <span>{this.props.quantity}</span>
              )}
            </div>

            <div className="product-card-summary__info__values__price">
              <span className="title">Price</span>
              <span>US$ {this.props.unityPrice}</span>
            </div>
          </div>

          {(this.props.editable) ? (
          <div className="product-card-summary__delete">
            <button className="red">
              <i className="fas fa-trash" />
            </button>
          </div>
          ) : ''}
        </div>
      </div>
    )
  }
}