import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ProductCardSummary from '../Product/ProductCardSummary';

import product1 from  '../../../images/product1.png';

import './Checkout.scss';

export default class Checkout extends Component {

  render() {
    return (    
      <div className="wrapper">
      
        <div className="container">
          <Breadcrumb path={[, {title: 'Cart'}, {title: 'Checkout'}]} />
          
          <div className="page-content">
            <h1>Checkout</h1>
            <p>We sent you an email confirming the receipt of your order.</p>
            <p>You can follow up the status of your order and see more details on this page.</p>
            <p>In case of problems or questions, feel free to <a href="/contact">send us a message</a>.</p>

            <div className="checkout-products">
              <ProductCardSummary
                picture={product1}
                title="Chilli T-Shirt"
                description="Made with 100% of cottom"
                quantity="2"
                unityPrice="17.58"
                />

              <ProductCardSummary
                picture={product1}
                title="Chilli T-Shirt"
                description="Made with 100% of cottom"
                quantity="2"
                unityPrice="17.58"
                />

              <ProductCardSummary
                picture={product1}
                title="Chilli T-Shirt"
                description="Made with 100% of cottom"
                quantity="2"
                unityPrice="17.58"
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}