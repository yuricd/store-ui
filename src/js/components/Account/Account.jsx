import React, { Component } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './Account.scss';
import ListOrders from '../Order/ListOrders';
import OrderDetail from '../Order/OrderDetail';
import PersonalInfo from './PersonalInfo';
import Addresses from './Addresses';

export default class Account extends Component {

  render() {
    return (    
      <div className="wrapper">
      
        <div className="container">
          <Breadcrumb path={[{title: 'My account', url: '/my-account'}]} />
          
          <div className="page-content">
          <h1 className="page-content__title">My account</h1>

            <div className="page-content__account">
              <nav className="page-content__account__menu">
                <ul>
                  <li>
                    <NavLink to="/my-account/orders">
                      <i class="fas fa-box" /> My orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-account/personal-info">
                      <i class="fas fa-address-card" /> Personal info
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-account/addresses">
                      <i class="fas fa-map-marked-alt" /> Addresses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/algo">
                      <i class="fas fa-envelope" /> Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              
              <div className="page-content__box">
                <Route exact path="/my-account/orders" component={ListOrders} />
                <Route path="/my-account/orders/:id" component={OrderDetail} />
                <Route path="/my-account/personal-info" component={PersonalInfo} />
                <Route path="/my-account/addresses" component={Addresses} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}