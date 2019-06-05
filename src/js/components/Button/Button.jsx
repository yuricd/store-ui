import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  
  
  render() {

    if (!this.props.isAnchor) {
      return (
        <button 
          className={`default-button ${this.props.classes}`} 
          onClick={this.props.handleClick}
          type={this.props.type}
        >
          {this.props.children}
        </button>
      )
    }

    return (
      <a 
        className={`default-button ${this.props.classes}`}
        href={this.props.to}
        target={this.props.target}
        ref="noreferrer noopener"
      >
        {this.props.children}
      </a>
    )
  }
}

