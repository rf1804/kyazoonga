import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './../App.css';
import './../index.css';

export default class Featured extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let { featuredData } = this.props;
    return (
      <a target="_blank" href={featuredData.link}>
        <img src={featuredData.imgSrc} alt={featuredData.altVal} />
      </a>
    );
  }
}
