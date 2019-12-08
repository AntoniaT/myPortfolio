import React from 'react';
import {AboutTextData} from './AboutData';
import Fade from 'react-reveal/Fade';

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
                <Fade left cascade>
                 <div className="processUX">
                 <img className="researchIcn" src="../images/research-icon.png" alt="icon"/><p>Research</p>
                 <img className="researchIcn" src="../images/diamond-icon-1.png" alt="icon"/><p>Define</p>
                 <img className="researchIcn" src="../images/bulb-icon-1.png" alt="icon"/><p>Ideate</p>
                 <img className="researchIcn" src="../images/prototype-icon.png" alt="icon"/><p>Prototype</p>
                 <img className="researchIcn" src="../images/user-icon Kopie.png" alt="icon"/><p>Validate</p>
            </div>
                </Fade>


            </div>
        </div>
    )
}

export default aboutTextParagraph;