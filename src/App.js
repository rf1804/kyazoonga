import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './Components/NavBar.js';
import SiteSlider from './Components/SiteSlider.js';
import TicketTile from './Components/TicketTile.js';
import Categories from './Components/Categories.js';
import Featured from './Components/Featured.js';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ticketTileData: [
        {
          ticketImg: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
          ticketPrice: 'INR 50 - 2,500',
          timeInfo: 'SAT, FEB 10, 2018 20:00 Onward',
          ticketTitle: 'JamshedpurFC - ISL Season 4',
          venueInfo: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'
        },
        {
          ticketImg: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
          ticketPrice: 'INR 50 - 2,500',
          timeInfo: 'SAT, FEB 10, 2018 20:00 Onward',
          ticketTitle: 'JamshedpurFC - ISL Season 4',
          venueInfo: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'
        },
        {
          ticketImg: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
          ticketPrice: 'INR 50 - 2,500',
          timeInfo: 'SAT, FEB 10, 2018 20:00 Onward',
          ticketTitle: 'JamshedpurFC - ISL Season 4',
          venueInfo: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'
        },
        {
          ticketImg: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
          ticketPrice: 'INR 50 - 2,500',
          timeInfo: 'SAT, FEB 10, 2018 20:00 Onward',
          ticketTitle: 'JamshedpurFC - ISL Season 4',
          venueInfo: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'
        },
        {
          ticketImg: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
          ticketPrice: 'INR 50 - 2,500',
          timeInfo: 'SAT, FEB 10, 2018 20:00 Onward',
          ticketTitle: 'JamshedpurFC - ISL Season 4',
          venueInfo: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'
        },
        {
          ticketImg: 'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',
          ticketPrice: 'INR 50 - 2,500',
          timeInfo: 'SAT, FEB 10, 2018 20:00 Onward',
          ticketTitle: 'JamshedpurFC - ISL Season 4',
          venueInfo: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'
        }
      ],
      categoryData: [
        {
          catName: 'Concerts',
          imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg'
        },
        {
          catName: 'Cricket',
          imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg'
        },
        {
          catName: 'Theatre & Arts',
          imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg'
        },
        {
          catName: 'Amusement Parks',
          imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg'
        },
        {
          catName: 'Sports',
          imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg'
        },
        {
          catName: 'Restaurants',
          imgSrc: 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg'
        }
      ],
      featuredData: [
        {
          link: 'https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg',
          altVal:'Forbes'
        },
        {
          link: 'https://tech.co/technology-upgrading-events-industry-2017-06',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg',
          altVal:'Forbes'
        },
        {
          link: 'https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg',
          altVal:'INC'
        },
        {
          link: 'http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/inc-logo.jpg',
          altVal:'INC'
        },
        {
          link: 'https://www.entrepreneur.com/article/289909',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/entrepreneur-magazine.jpg',
          altVal:'Entrepreneur Magazine'
        },
        {
          link: 'https://www.youtube.com/watch?v=1aSuorjmrRs',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/cnbc.jpg',
          altVal:'CNBC'
        },
        {
          link: 'http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/z-news.jpg',
          altVal:'Z News'
        },
        {
          link: 'http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/the-economic-times.jpg',
          altVal:'The Economic Times'
        },
        {
          link: 'http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg',
          altVal:'Times of India'
        },
        {
          link: 'http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/business-standard.jpg',
          altVal:'Business Standard'
        },
        {
          link: 'http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/news18.jpg',
          altVal:'News 18'
        },
        {
          link: 'https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446',
          imgSrc: 'https://static3.kyazoonga.com/Images/featured-logo/news18.jhttps://static3.kyazoonga.com/Images/featured-logo/ndtv.jpg',
          altVal:'NDTV'
        }
      ]
    }
  }
  componentDidMount() {
    console.log('When page mounted')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Just before render method on intial mount and subsequent updates')
  }
  render() {
    let { ticketTileData, categoryData, featuredData } = this.state;
    return (
      <div>
         {/* NavBar Component */}
        <NavBar/>
        {/* Slider Component */}
        <SiteSlider/>
        <section className="hot-ticket-sec ticket-boxes">
          <div className="container">
            <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
            <div className="row">
              {ticketTileData.map((val, i)=> { //Mapping of ticket tile dynamic data
                return <TicketTile key={i} ticketData={val}/> //Calling TicketTile component and sending the dynamic values as ticketData prop
              })}
            </div>
            <div className="btn-sec text-center p-20 pt-0">
              <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
            </div>
          </div>
        </section>
        <section className="home-cat-sec text-center">
          <div className="container">
            <h2 className="site-title">Browse by top categories</h2>
            <div className="row">
              {categoryData.map((val, i)=> { //Mapping of categories dynamic data
                return <Categories key={i} categoryData={val}/> //Calling Categories component and sending the dynamic values as categoryData prop
              })}
            </div>
          </div>
        </section>
        <section className="home-cat-sec text-center">
          <div className="container-fluid">
            <h2 className="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/" target="_blank"><img src="http://www.kyazoonga.com/images/iticket-logo.png" style={{width: 100}} /></a> to create and sell your event tickets online <small>Discover and purchase tickets to cool events created and listed by organizers directly</small></h2>
            <div className="row">
              <div className="col-sm-6 cat-box">
                <a href="#" className="block-link">
                  <div className="cat-txt">
                    <h3>Kyazoonga Blog</h3>
                  </div>
                  <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="Image" className="img-full-width" />
                </a>
              </div>
              <div className="col-sm-6 cat-box">
                <a href="#" className="block-link">
                  <div className="cat-txt">
                    <h3>Kyazoonga Blog</h3>
                  </div>
                  <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="Image" className="img-full-width" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="home-featured-sec text-center">
          <h2 className="site-title"><span>We've been featured in</span></h2>
          <div className="container-fluid">
            {featuredData.map((val, i)=> {
              return <Featured key={i} featuredData={val}/>
            })}
          </div>
        </section>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 cont-drop">
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider" />
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9 home-newsletter">
                <div className="row">
                  <div className="col-sm-5 news-subs-txt">
                    <h3>Subscribe to our Newsletter</h3>
                  </div>
                  <div className="col-sm-7">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <span className="input-group-btn">
                        <button className="btn btn-theme" type="submit">Subscribe</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row footer-links">
              <div className="col-sm-3">
                <h6>Help</h6>
                <ul>
                  <li><a href="#">24x7 Customer Service</a></li>
                  <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                  <li><a href="#">Reprint Confirmation</a></li>
                  <li><a href="#">Regenerate-e-Ticket</a></li>
                  <li><a href="#">Track Courier</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h6>Company</h6>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Media Center</a></li>
                  <li><a href="#">Policies</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h6>Popular Events</h6>
                <ul>
                  <li><a href="#">EsselWorld</a></li>
                  <li><a href="#">KidZania</a></li>
                  <li><a href="#">Water Kingdom</a></li>
                  <li><a href="#">Water Kingdom</a></li>
                  <li><a href="#">Adventure Park</a></li>
                  <li><a href="#">Vineyard Tour &amp; Cycling</a></li>
                </ul>
              </div>
              <div className="col-sm-3 country-flag-sec">
                <h6>Popular Events</h6>
                <ul>
                  <li><a href="http://www.kyazoonga.com.au/" target="_blank"><img src={require("./images/CountriesFlag/aus.png")} />Australia</a></li>
                  <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={require("./images/CountriesFlag/ind.png")} />India</a></li>
                  <li><a href="http://www.kyazoonga.ie/" target="_blank"><img src={require("./images/CountriesFlag/ireland.png")} />Ireland</a></li>
                  <li><a href="http://www.kyazoonga.ae/" target="_blank"><img src={require("./images/CountriesFlag/uae.png")} />United Arab Emirates</a></li>
                  <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={require("./images/CountriesFlag/usa.png")} />United States</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-social text-center">
              <h6>Follow Us</h6>
              <ul>
                <li><a className="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
                    <img src={require("./images/facebook.png")} alt="Facebook" width={32} height={32} /></a></li>
                <li><a className="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
                    <img src={require("./images/twitter.png")} alt="Twitter" width={32} height={32} /></a></li>
                <li><a className="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
                    <img src={require("./images/instagram.png")} alt="in" width={32} height={32} /></a></li>
                <li><a className="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
                    <img src={require("./images/snapchat.png")} alt="in" width={32} height={32} /></a></li>
                <li><a className="in" href="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
                    <img src={require("./images/in.png")} alt="Linkedin" width={32} height={32} /></a></li>
                <li><a className="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
                    <img src={require("./images/youtube.png")} alt="Youtube" width={32} height={32} /></a></li>
                <li><a className="g" href="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
                    <img src={require("./images/google.png")} alt="Google Plus" width={32} height={32} /></a></li>
                <li><a className="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
                    <img src={require("./images/pinterest.png")} alt="Pinterest" width={32} height={32} /></a></li>
              </ul>
              <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
            </div>
          </div>
        </footer>
        p&gt;
      </div>
    );
  }
}

export default App;
