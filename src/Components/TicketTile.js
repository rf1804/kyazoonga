import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './../App.css';
import './../index.css';

export default class TicketTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownMenu: [
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
        {imgSrc: 'http://www.kyazoonga.com/images/rsvp-blank-1.jpg'},
      ]
    }
  }
  render() {
    let { dropDownMenu } = this.state;
    let { ticketData } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <div className="box">
          <div className="dropdown visiter-icon">
            <a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown"><span className="glyphicon glyphicon-user" aria-hidden="true" /></a>
            <div className="dropdown-menu">
              <p>Who's attending (9)</p>
              {dropDownMenu.map((val, i)=> {
                return <a key={i} href="#"> <img src={val.imgSrc} alt="Image" /> </a>
              })}
            </div>
          </div>
          <a href="#" className="block-link">
            <div className="ticket-img">
              <img src={ticketData.ticketImg} alt="Image" />
              <span className="ticket-price">{ticketData.ticketPrice}</span>
            </div>
            <div className="ticket-info">
              <span className="time-info">{ticketData.timeInfo}</span>
              <h3 className="ticket-title">{ticketData.ticketTitle}</h3>
              <p className="venue-info">{ticketData.venueInfo}</p>
            </div>
          </a>
          <div className="social clearfix">
            <div className="pull-left">
              <a className="btn btn-default btn-xs ical" href="#">
                <i className="fa fa-calendar" /> &nbsp;iCal</a>
              <a className="btn btn-default btn-xs ml-10" href="#">
                <i className="fa fa-calendar" /> &nbsp;Google</a>
            </div>
            <div className="pull-right">
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-facebook" /></a>
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-twitter" /></a>
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-twitter" /></a>
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
