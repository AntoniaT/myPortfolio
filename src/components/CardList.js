import React from 'react';
import PortfolioCards from './PortfolioCards';
import './MainPortfolioApp.css';


const CardList = ({ cardsData }) =>{
   // console.log(cardsData);
    
    return (
        <div className="cardContainer">
           {cardsData.map((key, i) =>{
                 return (
                 <PortfolioCards 
                  key={cardsData[i].id}
                  id={cardsData[i].id}
                  name={cardsData[i].name}
                  subName={cardsData[i].subName}
                  image={cardsData[i].image}
                  live={cardsData[i].live}
                  code={cardsData[i].code}
                  role={cardsData[i].role}
                  duration={cardsData[i].duration}
                  deliverables={cardsData[i].deliverables}
                  problem={cardsData[i].problem}
                  subtitle={cardsData[i].subtitle}
                  mainCopy={cardsData[i].mainCopy}
                  leftTitle={cardsData[i].leftTitle}
                  leftImg={cardsData[i].leftImg}
                  leftCopy={cardsData[i].leftCopy}
                  rightTitle={cardsData[i].rightTitle}
                  rightImg={cardsData[i].rightImg}
                  rightCopy={cardsData[i].rightCopy}
                  leftSecTitle={cardsData[i].leftSecTitle}
                  leftSecImg={cardsData[i].leftSecImg}
                  leftSecCopy={cardsData[i].leftSecCopy}
                  rightSecTitle={cardsData[i].rightSecTitle}
                  rightSecImg={cardsData[i].rightSecImg}
                  rightSecCopy={cardsData[i].rightSecCopy}
                  leftThirdTitle={cardsData[i].leftThirdTitle}
                  leftThirdImg={cardsData[i].leftThirdImg}
                  leftThirdCopy={cardsData[i].leftThirdCopy}
                  rightThirdTitle={cardsData[i].rightThirdTitle}
                  rightThirdImg={cardsData[i].rightThirdImg}
                  rightThirdCopy={cardsData[i].rightThirdCopy}

                 />
                );
               })
 }
        </div>
);
}
export default CardList;