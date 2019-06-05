import React, { Component } from 'react';
import './PageTemplate.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default class PageTemplate extends Component {
  render() {

    return (
      <div className="wrapper">
      
        <div className="container">
          <Breadcrumb path={this.props.path} />
          
          <div className="page-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

