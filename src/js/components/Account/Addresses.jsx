import React, { Component } from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

import './Addresses.scss';

export default class Addresses extends Component {

  render() {
    return (    
             
      <div className="addresses">
        <h2>Addresses</h2>
        <p>The following addresses must be delivery addresses only. To edit charging addresses, please, go to <NavLink to="/my-account/personal-info">personal info</NavLink> page.</p>

        <div className="addresses__box">
          <form className="addresses__box__form formDefault">
            <div className="segment">
              <label>ID:</label>
              <input type="text" placeholder="Write a name for this address. E.g.: home, work, mother's house" />
            </div>
            <div className="segment">
              <label>Country:</label>
              <select>
                <option>United States</option>
                <option>Brazil</option>
              </select>
            </div>
            <div className="segment">
              <label>State:</label>
              <input type="text" placeholder="State/district" />
            </div>
            <div className="segment">
              <label>City/town:</label>
              <input type="text" placeholder="City/town" />
            </div>
            <div className="segment">
              <label>Street:</label>
              <input type="text" placeholder="Street" />
            </div>
            <div className="segment">
              <label>Neighborhood:</label>
              <input type="text" placeholder="Neighborhood" />
            </div>
            <div className="segment">
              <label>Number:</label>
              <input type="text" placeholder="Number" />
            </div>
            <div className="segment">
              <label>Complement:</label>
              <input type="text" placeholder="Complement" />
            </div>
            <div className="segment">
              <label>Zipcode:</label>
              <input type="text" placeholder="Zipcode" />
            </div>
            <div className="segment">
              <label>Receiver's name:</label>
              <input type="text" placeholder="Receiver's name" />
            </div>
            <div className="bottom">
              <Button isAnchor={false} type="button" classes="btn green">Add address</Button>
            </div>
          </form>  

          <div className="addresses__box__list">
            <h3>Saved addresses</h3>
            <div className="addresses__box__list__item">
              <span><span className="title">Address: </span>Rua Fernão de Magalhães, 141, Jd. Vila Galvão, Guarulhos - SP (BR)</span>
              <span><span className="title">Receiver:</span> Yuri Delgado</span>
              <Button isAnchor={false} type="button" classes="btn red tiny">Delete address</Button>
            </div>

            <div className="addresses__box__list__item">
              <span><span className="title">Address: </span>Rua Fernão de Magalhães, 141, Jd. Vila Galvão, Guarulhos - SP (BR)</span>
              <span><span className="title">Receiver:</span> Yuri Delgado</span>
              <Button isAnchor={false} type="button" classes="btn red tiny">Delete address</Button>
            </div>
          </div>

        </div>


      </div>
    )
  }
}