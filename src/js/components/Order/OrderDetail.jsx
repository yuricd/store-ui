import React, { Component } from 'react';
import ProductCardSummary from '../Product/ProductCardSummary';
import product1 from  '../../../images/product1.png';
import Breadcrumb from '../Breadcrumb/Breadcrumb';


import './OrderDetail.scss';

export default class OrderDetail extends Component {

  render() {
    const { params } = this.props.match

    return (    
      <div className="order-detail">

        <h1>Order detail ({params.id})</h1>
        <p>Do you have any question or problem? You can contact us <a href="/contact">here</a>.</p>
        
        <div className="page-content__main">
          <div className="status">
            <ul>
              <li className="status__done">
                <span>Waiting for payment</span>
              </li>
              <li className="status__done">
                <span>Manufacturing order</span>
              </li>
              <li>
                <span>Preparing order</span>
              </li>
              <li>
                <span>Delivering order</span>
              </li>
            </ul>
          </div>

          <p>The items of your order:</p>

          <div className="order-detail__content">
            <div className="order-detail__content__products">
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

            <div className="order-detail__content__info">
              <div className="order-detail__content__info__data">
                <h3>Payment information</h3>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Method</span>
                  <p>Credit card</p>
                </div>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Products price</span>
                  <p>US$ 54.90</p>
                </div>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Shipment price</span>
                  <p>US$ 4.50</p>
                </div>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Total price</span>
                  <p>US$ 58.90</p>
                </div>
              </div>

              <div className="order-detail__content__info__data">
                <h3>Shipment information</h3>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Address</span>
                  <p>R. Fernão de Magalhães, 141, Guarulhos São Paulo - Brazil - 07055-110</p>
                </div>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Receipt</span>
                  <p>Yuri Delgado</p>
                </div>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Delivery est.</span>
                  <p>01/01/2019</p>
                </div>
                <div className="order-detail__content__info__data__item">
                  <span className="title">Tracking</span>
                  <p>
                    <a href="/track" target="_blank" rel="noopener noreferrer">http://tracking.usps.com/track/4827jfk-2j3f83mSDFJ4827jfk-2j3f83mSDFJ4827jfk-2j3f83mSDFJ</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}