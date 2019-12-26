import React from 'react';
import '../css/Home.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import '../css/Buttons.css'
import { Link } from 'react-router-dom';


const HomeAnimation = () => (
                   <div className="homeTitle">
                     <Fade bottom>
                       <h1 className="headline">Multimedia + UX Designer Front-end Developer</h1>
                     </Fade>
                     <Slide bottom>
                       <h2 className="headline subTitle">I design and build for the Web</h2>
                     </Slide>
                     <Slide bottom>
                        <Link className="ctaBtn" to="/about">Find out more</Link>
                     </Slide>
                   </div> 
            );

export default HomeAnimation;