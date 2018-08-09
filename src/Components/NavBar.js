import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './../App.css';
import './../index.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse site-nav">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="site-logo" href="#">
              <img src={require("./../images/kyazoonga.png")} alt="The Big Ticket" title="The Big Ticket" />
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-right " id="myNavbar">
            <ul className="nav navbar-nav top-nav hide-on-mobile">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true" /><span className="badge">4</span></a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true" /><span className="badge">10</span></a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
            </ul>
            <ul className="nav navbar-nav top-nav hide-on-desktop">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true" /><span className="badge">4</span></a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true" /><span className="badge">10</span></a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
              <li><a href="#">Concerts</a></li>
              <li><a href="#" className="blue-bg">Cricket</a></li>
              <li><a href="#" className="orange-bg">Events</a></li>
              <li><a href="#" className="green-bg">Sports</a></li>
              <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
              <li><a href="#" className="purple-bg">Restaurants</a></li>
              <li><a href="#" className="yellow-bg">Theatre &amp; Arts</a></li>
              <li><a href="#">Parties</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
