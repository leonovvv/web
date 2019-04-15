import React, { Component } from 'react';
import './ContactUs.scss';
import Header from '../Header';
import Footer from '../Footer';
const iFrameStyle = {
  border: 0,
};
class ContactUs extends Component {
  render() {
    return (
      <div className="contactUs">
        <Header />
        <div className="contactUsInformation">
          <div>
            <h1>Ms. Rosa Tsai </h1>
            <h2>Person in charge of ICMMD 2019</h2>

            <h3>Contact Information:</h3>

            <h6>Adress:</h6>
            <p>Kiev,Ukraine</p>
            <h6>Phone:</h6>
            <p>+38(097)-124-83-65</p>
            <h6>Email:</h6>
            <p>icmmd_secretary@126.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d635.3447184384985!2d30.5355682!3d50.4340432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf066b4551d5%3A0x44a3a0dcdde885fc!2zTnR1ICJLcGkiLCBObmsgIklwc2Ei!5e0!3m2!1sen!2sua!4v1555310157175!5m2!1sen!2sua"
            width="600"
            height="450"
            frameborder="0"
            style={iFrameStyle}
            allowfullscreen
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
