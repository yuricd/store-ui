import React, { Component } from 'react';
import Button from '../Button/Button';
import './Home.scss';
import ProductCard from '../Product/ProductCard';

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="presentation">
          <div className="wrapper">
            <div className="presentation-container">
              <div className="presentation__left-side">
                <h3>Introducing</h3>
                <h1>Cutie Collection</h1>
                <p>Irony and cutieness simultaneously</p>
                <div className="btn-container right">
                  <Button isAnchor={true} type="button" to="/catalog" classes="btn no-bg rounded white see-more">See more</Button>
                </div>
              </div>

              <div className="presentation__right-side">
                <div className="demo-pic"></div>
              </div>
            </div>
          </div>
          <div className="brush"></div>
        </div>

        <section className="features">
          <div className="wrapper">
            <div className="features-container">
              <div className="features__item">
                <div className="features__item_img ship">
                  <i class="fas fa-space-shuttle"></i>
                </div>
                <div className="features__item__text">
                  <h4>We ship overseas</h4>
                  <p>Order from any country, our spaceship deliver it.</p>
                </div>
              </div>
              <div className="features__item">
                <div className="features__item_img star">
                  <i class="fas fa-star" />
                </div>
                <div className="features__item__text">
                  <h4>Be special</h4>
                  <p>Products manufactured by demand.</p>
                </div>
              </div>
              <div className="features__item">
                <div className="features__item_img problems">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <div className="features__item__text">
                  <h4>Problems?</h4>
                  <p>Our trained alien team is ready to help you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="wrapper">
            <div className="section-header">
              <h1 className="section-title">Categories</h1>
            </div>
            <div className="categories-container">
              <a href="/catalog/nerd">
                <div className="categories__item">
                  <div className="categories__item__icon icon-nerd"></div>
                  <h3 className="category-title">Nerd</h3>
                  <h4>Collection</h4>
                </div>
              </a>

              <a href="/catalog/cutie">
                <div className="categories__item">
                  <div className="categories__item__icon icon-cutie"></div>
                  <h3 className="category-title">Cutie</h3>
                  <h4>Collection</h4>
                </div>
              </a>

              <a href="/catalog/kids">
                <div className="categories__item">
                  <div className="categories__item__icon icon-kids"></div>
                  <h3 className="category-title">Kids</h3>
                  <h4>Collection</h4>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        <section className="highlights">
          <div className="wrapper">
            <div className="section-header">
              <h1 className="section-title">Highlights</h1>
              <h3 className="section-subtitle">Selected specially for you</h3>
            </div>

            <div className="list-products">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

