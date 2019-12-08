import React from 'react';
import AboutCard from './AboutCard';
import { AboutCardData } from './AboutData';
import '../css/AboutCard.css';

const AboutCardList = () =>{

        return (
            <div className="aboutCardListCont"> 
        <AboutCard
        key={AboutCardData[0].id}
        image={AboutCardData[0].image}
        title={AboutCardData[0].title}
        description={AboutCardData[0].description}
        love={AboutCardData[0].love}
        loveAnswer={AboutCardData[0].loveAnswer}
        tools={AboutCardData[0].tools}
        tool1={AboutCardData[0].tool1}
        tool2={AboutCardData[0].tool2}
        tool3={AboutCardData[0].tool3}
        tool4={AboutCardData[0].tool4}
        tool5={AboutCardData[0].tool5}
        tool6={AboutCardData[0].tool6}
        tool7={AboutCardData[0].tool7}
        buttonTxt={AboutCardData[0].buttonTxt}
        />
        <AboutCard 
        key={AboutCardData[1].id}
        image={AboutCardData[1].image}
        title={AboutCardData[1].title}
        description={AboutCardData[1].description}
        love={AboutCardData[1].love}
        loveAnswer={AboutCardData[1].loveAnswer}
        tools={AboutCardData[1].tools}
        tool1={AboutCardData[1].tool1}
        tool2={AboutCardData[1].tool2}
        tool3={AboutCardData[1].tool3}
        tool4={AboutCardData[1].tool4}
        tool5={AboutCardData[1].tool5}
        tool6={AboutCardData[1].tool6}
        tool7={AboutCardData[1].tool7}
        buttonTxt={AboutCardData[1].buttonTxt}
        />
        </div> 
    )}

export default AboutCardList;