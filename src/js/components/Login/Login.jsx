import React, { Component } from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import Button from '../Button/Button';
import './Login.scss';

export default class Login extends Component {

  handleClick = () => {
    console.log('Login');
  }

  render() {
    return (    
      <PageTemplate path={[{title: 'Login'}]}>
        <h1 className="page-content__title">Login</h1>
        <div className="login">
          <div className="login__signin">
            <h3>Access your account</h3>
            <form className="formDefault">
              <div className="row">
                <input type="email" name="email" placeholder="Your email" />
              </div>
              <div className="row">
                <input type="password" name="password" placeholder="Your password" />
              </div>
              <div className="row bottom">
                <Button type="button" classes="btn green cart" handleClick={this.handleClick}>Login</Button>
              </div>
            </form>
            <p className="centerize">
              <a href="/retrieve-password">Forgot your password?</a>
            </p>
          </div>

          <div className="login__signup">
            <h3>Create your account</h3>
            <form className="formDefault">
              <div className="row">
                <input type="text" name="fullname" placeholder="Your fullname" />
              </div>
              <div className="row">
                <input type="email" name="email" placeholder="Your email" />
              </div>
              <div className="row">
                <input type="password" name="password" placeholder="Choose a password" />
              </div>
              <div className="row">
                <input type="password" name="password" placeholder="Confirm the password" />
              </div>
              <div className="row">
                <label className="label-container" for="accept">
                  <input type="checkbox" name="accept" value="accept" id="accept"/>
                  <span class="checkmark"></span>I accept the terms of service and policies
                </label>
              </div>
              <div className="row bottom">
                <Button isAnchor={true} to="button" classes="btn green">Create account</Button>
              </div>
            </form>
          </div>
        </div>
      </PageTemplate>
    )
  }
}