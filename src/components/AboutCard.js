import React from 'react';
import '../css/About.css';
import '../css/AboutCard.css';
import { Link } from 'react-router-dom';


const AboutCard = (props) => {
    const {title, image, description, love, loveAnswer, tools, tool1, tool2, tool3, tool4, tool5, tool7}= props;
    return (
    <div className="aboutCardContainer blue">
          <h2>{ title }</h2>
           <img src={ image } alt="graphic"/>
            <p>{ description }</p>
            <h3>{ love }</h3>
            <p>{ loveAnswer }</p>
            <h3>{ tools }</h3>
            <p>{ tool1 }</p>
            <p>{ tool2 }</p>
            <p>{ tool3 }</p>
            <p>{ tool4 }</p>
            <p>{ tool5 }</p>
            <p>{ tool7 }</p>
            <Link to="/portfolio">
             <button className="regularBtn">Check out my projects</button>
            </Link>
    </div>
    )

}

export default AboutCard;