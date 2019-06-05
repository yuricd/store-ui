import React, { Component } from 'react';
import logo from '../../../images/logo.png';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <div className="footer__content">
            <div className="logo small">
              <a href="/">
                <img src={logo} alt="Allien Crew" />
              </a>
            </div>
            <div className="footer__content__item">
              <h5>Website</h5>
              <ul>
                <li>
                  <a href="/highlights">Highlights</a>
                </li>
                <li>
                  <a href="/catalog">Catalog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/login">Sign in/Sign up</a>
                </li>
              </ul>
            </div>
            <div className="footer__content__item">
              <h5>Useful links</h5>
              <ul>
                <li>
                  <a href="/tracking-order">Tracking the order</a>
                </li>
                <li>
                  <a href="/shipping-rates">Shipping and rates</a>
                </li>
                <li>
                  <a href="/refunds">Refunds</a>
                </li>
                <li>
                  <a href="/measures">Measures</a>
                </li>
              </ul>
            </div>
            
            <div className="footer__content__item">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="/facebook">Facebook</a>
                </li>
                <li>
                  <a href="/instagram">Instagram</a>
                </li>
                <li>
                  <a href="/something">Email</a>
                </li>
              </ul>
            </div>

            <div className="footer__content__item">
              <div className="footer__row">
                <h5>Sign our newsletter</h5>
                <form className="sign-newsletter">
                  <input type="email" placeholder="yourname@email.com" />
                  <button><i className="fas fa-angle-right" /></button>
                </form>
              </div>
              <div className="footer__row">
                <h5>Follow us</h5>
                <ul className="social-medias">
                  <li>
                    <a href="/something"><i className="fab fa-facebook-square" /></a>  
                  </li>
                  <li>
                    <a href="/something"><i className="fab fa-instagram" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy">
            <p>Store &copy; 2019</p>
        </div>
      </footer>
    );
  }
}

