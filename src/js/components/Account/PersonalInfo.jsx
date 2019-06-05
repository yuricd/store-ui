import React, { Component } from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';


import './PersonalInfo.scss';

export default class PersonalInfo extends Component {

  render() {
    return (    
             
      <div className="personal-info">
        <h2>Personal info</h2>
        <div className="personal-info__form">
          <form className="formDefault">
            <h3>Personal information</h3>
            <p>The following fields are used for charging purposes too. <strong>You will tell us the shipping address later, don't worry.</strong></p>
            <div className="segment">
              <label>Your fullname:</label>
              <input type="text" placeholder="Your fullname" />
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
            <div className="bottom">
              <Button isAnchor={false} type="button" classes="btn green">Save</Button>
            </div>
          </form>  
          <form className="formDefault">
          <h3>Access information</h3>
            <div className="segment">
              <label>Your email:</label>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="bottom">
              <Button isAnchor={false} type="button" classes="btn green">Update</Button>
            </div>
          </form>  

          <form className="formDefault">
            <h3>Update your password:</h3>
            <div className="segment">
              <input type="password" placeholder="Your current password" />
            </div>
            <div className="segment">
              <input type="password" placeholder="Your new password" />
            </div>
            <div className="segment">
              <input type="password" placeholder="Confirm your new password" />
            </div>
            <div className="bottom">
              <Button isAnchor={false} type="button" classes="btn green">Update</Button>
            </div>
          </form>  
          <p>To edit your deliver addresses, <NavLink to="/my-account/addresses">click here</NavLink>.</p>

        </div>


      </div>
    )
  }
}