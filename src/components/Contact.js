import React from 'react';
import '../css/ContactStyle.css';
import '../css/Buttons.css'
import Fade from 'react-reveal/Fade';
import Footer from './Footer';

const Contact = () =>{
    
    return (
      <div>
          <div className="contact">
            <Fade bottom>
              <h1>Let's work together!</h1>
              <p>Would you like to work with me? Awesome! </p>
              <button className="regularBtn contactBtn">CONTACT ME</button>
            </Fade>
            <Fade bottom>
              <p className="contactText">I would love to discuss how I could help your business and make your goals happen.</p>
              <p className="contactText">Connect with me on LinkedIn or send me an Email, I will make sure to get in touch!</p>
              <h4>Location:</h4>
              <p>Denmark, Germany & Austria</p>
            </Fade>
          </div>
          <Footer />
        </div>
          )
 }

export default Contact;