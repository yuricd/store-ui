import React, { Component } from 'react';
import './Breadcrumb.scss';

export default class Breadcrumb extends Component {
  render() {

    const pages = this.props.path;

    return (
      <div className="breadcrumb">
        <ul>
          <li className="breadcrumb__home"><a href="/"><i className="fas fa-home" /></a></li>
          {pages.map(item =>{
            return <li key={item.title}><a href={item.url}>{item.title}</a></li> 
          })}
        </ul>
      </div>
    );
  }
}

