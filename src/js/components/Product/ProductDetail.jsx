import React, { Component } from 'react';
import './ProductDetail.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Button from '../Button/Button';
import ProductCard from '../Product/ProductCard';
import product1 from  '../../../images/product1.png';

export default class ProductDetail extends Component {

  state = {
    descDetails: '',
    descPreviews: '',
    descSelected: 'details',
    quantity: 1,
    productPrice: 0,
    totalPrice: 0  
  }

  handleDescriptionTabs = (tab) => {
    this.setState({
      descSelected: tab
    })
  }

  handleTotalPrice = (e) => {
    this.setState({
      quantity: e.target.value,
      totalPrice: e.target.value * this.state.productPrice
    })
  }

  componentDidMount() {
    const descDetails = 'Product details';
    const descReviews = 'Product reviews';
    const productPrice = 17.32;

    this.setState({
      descDetails: descDetails,
      descReviews: descReviews,
      productPrice,
      totalPrice: productPrice
    })
  }

  render() {
    const { params } = this.props.match
    const { descDetails, descReviews, descSelected, totalPrice } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <Breadcrumb path={[ {title: 'Catalog', url: '/catalog'}, {title: 'Product detail '}]} />
          
          <div className="page-content">
            <div className="product-detail">
              <div className="product-detail__info">
                <div className="product-detail__pictures">
                  <div className="product-detail__pictures__exhibition">
                    <img src={product1} alt="Main" />
                  </div>
                  <ul className="product-detail__pictures__thumbs">
                    <li>
                      <div>
                        <img src={product1} alt="Thumb1" />
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={product1} alt="Thumb1" />
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={product1} alt="Thumb1" />
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={product1} alt="Thumb1" />
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="product-detail__features">
                  <h2>Chilly T-Shirt {params.id}</h2>
                  <div className="tags small">
                    <span>Nerd</span>
                    <span>T-Shirt</span>
                    <span>Cool</span>
                  </div>
                  <p>Ref.: TSC1-0001</p>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                  </div>

                  <div className="product-detail__features__selection">
                    <div className="product-detail__features__selection__item">
                      <span className="title">Choose the size</span>
                      <div className="product-detail__features__selection__item__type product-detail__features__selection__item__type--size">
                        <ul>
                          <li>
                            <button className="selection size">S</button>
                          </li>
                          <li>
                            <button className="selection size">M</button>
                          </li>
                          <li>
                            <button className="selection size">L</button>
                          </li>
                          <li>
                            <button className="selection size">XL</button>
                          </li>
                          <li>
                            <button className="selection size">2XL</button>
                          </li>
                          <li>
                            <button className="selection size">3L</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-detail__features__selection__item">
                      <span className="title">Choose the color</span>
                      <div className="product-detail__features__selection__item__type product-detail__features__selection__item__type--color">
                        <ul>
                          <li>
                            <button className="selection color">Black</button>
                          </li>
                          <li>
                            <button className="selection color">White</button>
                          </li>
                          <li>
                            <button className="selection color">Blue</button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="product-detail__features__selection__item">
                      <span className="title">Quantity</span>
                      <div className="product-detail__features__selection__item__type product-detail__features__selection__item__type--quantity">
                        <input type="number" defaultValue="1" min="1" onChange={this.handleTotalPrice} />
                      </div>
                    </div>

                  </div>

                  <div className="product-detail__features__price">
                    <span>US$ {totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="product-detail__features__actions">
                    <Button type="button" classes="btn green cart"><i className="fas fa-shopping-cart" /> Add to cart</Button>
                    <Button type="button" classes="btn red wishlist"><i className="fas fa-heart" /> Add to wishlist</Button>
                    <Button type="button" classes="btn grey share" key="share-btn"><i className="fas fa-share-alt" /> Share</Button>
                  </div>
                </div>
              </div>

              <div className="product-detail__description">
                <nav className="product-detail__description__tabs">
                  <ul>
                    <li>
                      <button 
                        className={(this.state.descSelected === 'details') ? 'active' : ''} 
                        onClick={() => this.handleDescriptionTabs('details')}
                      >
                        Details
                      </button>
                    </li>
                    <li>
                    <button 
                        className={(this.state.descSelected === 'reviews') ? 'active' : ''} 
                        onClick={() => this.handleDescriptionTabs('reviews')}
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className="product-detail__description__content">
                  {(descSelected === 'details') ? (
                    <p>{descDetails}</p>
                  ) : (
                    <p>{descReviews}</p>
                  )}
                </div>
              </div>

            </div>

            <div className="products-related">
              <div className="list-products centerize">
                <ProductCard to="/product-detail/6" />
                <ProductCard to="/product-detail/5" />
                <ProductCard to="/product-detail/4" />
                <ProductCard to="/product-detail/3" />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}