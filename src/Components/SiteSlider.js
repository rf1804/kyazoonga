import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './../App.css';
import './../index.css';

export default class SiteSlider extends Component {
  render() {
    return (
      <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
        <h1>Tickets made simple for everyone, everywhere</h1>
        <div className="site-manu container">
          <div className="collapse navbar-collapse hide-on-mobile">
            <ul className="nav navbar-nav sub-main-nav">
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
          <div className="banner-serch-box"><input id="txtSearchBox" className="q" defaultValue placeholder="Search for an event, venue or city" type="text" /><a href="javascript:void(0);"><i className="fa fa-search" aria-hidden="true" /></a></div>
        </div>
        {/* Carousel items */}
        <div className="carousel-inner">
          {/* slide #1 */}
          <div data-slide={0} className="item active">
            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="Video" className="hide-on-desktop" />
            <div className="hide-on-mobile">
              <video title={0} id="bgvid0" autoPlay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                <source src="http://content.kyazoonga.com/videos/video9.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
          </div>
          <div data-slide={1} className="item">
            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="Video" className="hide-on-desktop" />
            <div className="hide-on-mobile">
              <video title={1} id="bgvid1" autoPlay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                <source src="http://content.kyazoonga.com/videos/video1.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
          </div>
          <div data-slide={2} className="item">
            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="Video" className="hide-on-desktop" />
            <div className="hide-on-mobile">
              <video title={2} id="bgvid2" autoPlay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                <source src="http://content.kyazoonga.com/videos/video2.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
          </div>
          <div data-slide={3} className="item">
            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="Video" className="hide-on-desktop" />
            <div className="hide-on-mobile">
              <video title={3} id="bgvid3" autoPlay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                <source src="http://content.kyazoonga.com/videos/video3.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
          </div>
          <div data-slide={4} className="item">
            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="Video" className="hide-on-desktop" />
            <div className="hide-on-mobile">
              <video title={4} id="bgvid4" autoPlay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                <source src="http://content.kyazoonga.com/videos/video8.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
          </div>
        </div>
        {/* end of '.carousel-inner' */}
      </div>
    );
  }
}
