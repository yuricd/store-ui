import React, { Component } from 'react';
import Button from '../Button/Button';

import './OrderCardSummary.scss';

export default class OrderCardSummary extends Component {
  render() {
    return (
      <div className="order-summary-card">
        <div className="orders-summary-card__status">
          <span className="date">{this.props.date}</span>
          <span className="status">{this.props.status}</span>
        </div>

        <div className="orders-summary-card__info pending">
          <h3>Order #{this.props.id}</h3>
          <p>{this.props.description}</p>

          <div className="orders-summary-card__info__payment">
            <span className="title">Payment info:</span>
            <div className="data">
              <p>{this.props.paymentMethod} - US$ {this.props.totalPrice}  <span className="price-split">(US$ {this.props.productPrice} + US$ {this.props.shippingPrice} (shipping))</span></p>
            </div>
          </div>

          <div className="orders-summary-card__info__shipment">
            <span className="title">Shipment info:</span>
            <div className="data">
              <p>{this.props.address}</p>
              <p>To {this.props.receipt}</p>
              <p>Delivery estimation {this.props.deliveryEstimation}</p>
            </div>
          </div>

          <div className="orders-summary-card__info__bottom">
            <Button isAnchor={true} to="orders/5" type="button" classes="btn grey">Details</Button>
          </div>
        </div>
      </div>
    )
  }
}