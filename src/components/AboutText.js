import React from 'react';
import {AboutTextData} from './AboutData';
import '../css/AboutCard.css';

const aboutTextParagraph = () => {
    return(
        <div className="aboutInnerCont">
            <div>
            <p>{AboutTextData[0].text}</p>
            <p className="blue">{AboutTextData[1].text}</p>
            </div>
            <div className="aboutTextBox">
                <h1>Work process</h1>
                <h2>What does UX mean for me and how does my process look like?</h2>
            </div>
        </div>
    )
}

export default aboutTextParagraph;