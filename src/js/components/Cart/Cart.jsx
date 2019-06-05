import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Button from '../Button/Button';
import ProductCardSummary from '../Product/ProductCardSummary';

import product1 from  '../../../images/product1.png';

import './Cart.scss';

export default class Cart extends Component {

  render() {
    return (    
      <div className="wrapper">
      
        <div className="container">
          <Breadcrumb path={[{title: 'Cart'}]} />
          
          <div className="page-content">
            <h1>Cart</h1>
            <p>You have added the following items to your cart:</p>

            <div className="cart">
              <div className="cart__products">
                <ProductCardSummary
                  picture={product1}
                  title="Chilli T-Shirt"
                  description="Made with 100% of cottom"
                  quantity="2"
                  unityPrice="17.58"
                  editable={true}
                  />

                <ProductCardSummary
                  picture={product1}
                  title="Chilli T-Shirt"
                  description="Made with 100% of cottom"
                  quantity="2"
                  unityPrice="17.58"
                  editable={true}
                  />

                <ProductCardSummary
                  picture={product1}
                  title="Chilli T-Shirt"
                  description="Made with 100% of cottom"
                  quantity="2"
                  unityPrice="17.58"
                  editable={true}
                  />

                <Button isAnchor={true} to="/catalog" type="button" classes="btn grey">Keep buying</Button>
              </div>

              <div className="cart__overview">
                <div className="cart__overview__box">
                  <h3>Order overview</h3>
                  <p>Calculate shipping price</p>
                  <form className="shipment-data">
                    <select>
                      <option>Brazil</option>
                      <option>Estonia</option>
                      <option>United States</option>
                    </select>
                    <input type="text" placeholder="Enter the zipcode" />
                  </form>
                  <span className="shipment-info">
                    <span className="price">US$ 8.30</span> to 24554-3347 (Brazil)
                  </span>
                  <div className="cart__overview__total">
                    <table>
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>US$ 48.00</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              <Button type="button" classes="btn green"> Proceed to checkout</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}