import React from 'react';
//import { Link } from 'react-router-dom';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
//import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{

    render() {
        return (
            <div className="footer">
                <div className="copyRContainer">
                  <p>© Developed with &hearts; by ANCK Design 2019</p>
                </div>
{/*                 <div className="arrowContainer">
                 <FontAwesomeIcon icon={faChevronUp} size="lg"/>
        </div> */}
                <div className="linkContainer">
                  <a href="https://github.com/AntoniaT">
                    <FontAwesomeIcon className="soMeIcon" icon={faGithub} size="lg"/>
                  </a>
                  <a href="https://www.linkedin.com/in/antonia-hackenberger">
                    <FontAwesomeIcon className="soMeIcon" icon={faLinkedin} size="lg"/>
                  </a>
                  <a href="https://dribbble.com/AntoniaH">
                    <FontAwesomeIcon className="soMeIcon" icon={faDribbble} size="lg"/>
                  </a>
                  <a href="https://www.behance.net/antoniahackenberger">
                     <FontAwesomeIcon className="soMeIcon" icon={faBehance} size="lg"/>
                  </a>
                </div>
            </div>
        );
    }
  }

export default Footer;