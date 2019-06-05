import React, { Component } from 'react';
import ProductCard from '../Product/ProductCard';

import './Catalog.scss';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default class Catalog extends Component {
  render() {

    return (
      <div className="wrapper">
        <div className="container">
          <Breadcrumb path={[{title: 'Catalog'}]} />
          
          <div className="page-content">
            <h1 className="page-content__title">Catalog</h1>

            <div className="categories-bar">
              <ul>
                <span>Categories</span>
                <li>
                  <a href="/all">All</a>
                </li>
                <li>
                  <a href="/all">Nerd</a>
                </li>
                <li>
                  <a href="/all">Cutie</a>
                </li>
                <li>
                  <a href="/all">World</a>
                </li>
              </ul>

              <ul>
                <span>Sort by</span>
                <select>
                  <option>Relevance</option>
                  <option>Price</option>
                </select>
              </ul>
            </div>

            <div className="list-products centerize">
              <ProductCard to="/product/5" />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

