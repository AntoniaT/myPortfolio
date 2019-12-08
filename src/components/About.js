import React from 'react';
import '../css/About.css';
import './AboutData.js';
import '../css/AboutCard.css';
import { Link } from 'react-router-dom';
import AboutCardList from './AboutCardList';
import AboutText from './AboutText';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';

class About extends React.Component{
    render() {
        return (
            <div>
            <div className="aboutPage">
            <Fade bottom>
                <h1>Multimedia + UX Designer</h1>
                <h1>Front-end Developer</h1>
            </Fade>
            <Fade bottom>
                <img className="aboutPhoto" src="images/aboutme-photo.png" alt="me"></img>
            </Fade>
            <Fade bottom>
                <div className="aboutTextCont">
                    <h1>Hi, I'm Antonia,</h1>
                    <AboutText/>
                </div>
                <div className="aboutCardListCont">   
                  <AboutCardList />
                </div>
                <Link to="/portfolio">
                <div className="btnContainer">
                </div>
                </Link>
                </Fade>
            </div>
            <Footer />
            </div>
            
        )
    }
}



export default About;