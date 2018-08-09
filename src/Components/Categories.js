import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './../App.css';
import './../index.css';

export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let { categoryData } = this.props;
    console.log(categoryData)
    return (
      <div className="col-sm-4 cat-box">
        <a href="#" className="block-link">
          <div className="cat-txt">
            <h3>{categoryData.catName}</h3>
          </div>
          <img src={categoryData.imgSrc} alt={categoryData.catName} className="img-full-width" />
        </a>
      </div>
    );
  }
}
