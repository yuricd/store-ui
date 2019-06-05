import React, { Component } from 'react';

import './ListOrders.scss';
import OrderCardSummary from './OrderCardSummary';

export default class ListOrders extends Component {

  render() {
    return (    
             
      <div className="orders-list">
        <h2>My orders</h2>
        <OrderCardSummary
          id="345"
          date="01/01/19"
          status="Waiting for payment"
          description="T-Shirt Chilly (1), T-Shirt Physicians (2), T-Shirts Pizza Pug (1)"
          paymentMethod="Credit card"
          totalPrice="34"
          productPrice="30"
          shippingPrice="4"
          address="R. Fernão de Magalhães, 141, Guarulhos São Paulo - Brazil - 07055-110"
          receipt="Yuri Delgado"
          deliveryEstimation="07/07/19"
          />

        <OrderCardSummary
          id="345"
          date="01/01/19"
          status="Waiting for payment"
          description="T-Shirt Chilly (1), T-Shirt Physicians (2), T-Shirts Pizza Pug (1)"
          paymentMethod="Credit card"
          totalPrice="34"
          productPrice="30"
          shippingPrice="4"
          address="R. Fernão de Magalhães, 141, Guarulhos São Paulo - Brazil - 07055-110"
          receipt="Yuri Delgado"
          deliveryEstimation="07/07/19"
          />

        <OrderCardSummary
          id="345"
          date="01/01/19"
          status="Waiting for payment"
          description="T-Shirt Chilly (1), T-Shirt Physicians (2), T-Shirts Pizza Pug (1)"
          paymentMethod="Credit card"
          totalPrice="34"
          productPrice="30"
          shippingPrice="4"
          address="R. Fernão de Magalhães, 141, Guarulhos São Paulo - Brazil - 07055-110"
          receipt="Yuri Delgado"
          deliveryEstimation="07/07/19"
          />

        <OrderCardSummary
          id="345"
          date="01/01/19"
          status="Waiting for payment"
          description="T-Shirt Chilly (1), T-Shirt Physicians (2), T-Shirts Pizza Pug (1)"
          paymentMethod="Credit card"
          totalPrice="34"
          productPrice="30"
          shippingPrice="4"
          address="R. Fernão de Magalhães, 141, Guarulhos São Paulo - Brazil - 07055-110"
          receipt="Yuri Delgado"
          deliveryEstimation="07/07/19"
          />

        <OrderCardSummary
          id="345"
          date="01/01/19"
          status="Waiting for payment"
          description="T-Shirt Chilly (1), T-Shirt Physicians (2), T-Shirts Pizza Pug (1)"
          paymentMethod="Credit card"
          totalPrice="34"
          productPrice="30"
          shippingPrice="4"
          address="R. Fernão de Magalhães, 141, Guarulhos São Paulo - Brazil - 07055-110"
          receipt="Yuri Delgado"
          deliveryEstimation="07/07/19"
          />
        </div>
    )
  }
}