import React from 'react';
import '../css/PortfolioCards.css';
import { Link } from 'react-router-dom';


const PortfolioCards = ({id, name, subName, subtitle, mainCopy, image, live, code, role, duration, deliverables, problem, leftTitle, leftImg, leftCopy, rightTitle, rightImg, rightCopy, leftSecTitle, leftSecImg, leftSecCopy, rightSecTitle, rightSecImg, rightSecCopy, leftThirdTitle, leftThirdImg, leftThirdCopy, rightThirdTitle, rightThirdImg, rightThirdCopy}) => {
  console.log(id, name, image, subtitle, mainCopy, leftTitle, leftImg, rightTitle, leftCopy, rightCopy, leftSecTitle, leftSecImg, leftSecCopy, rightSecTitle, rightSecImg, rightSecCopy)
      return (
      <div className="card">
          <img className="imgCards" src={image} alt="project" />
            <div className="middle">
              <Link 
              to={{
                pathname:`/showcase/${id}`,
                state: {
                  projectName: {name},
                  projectImage: {image},
                  projectSubtitle: {subtitle},
                  projectRole:{role},
                  projectDuration:{duration},
                  projectDeliverables:{deliverables},
                  projectProblem: {problem},
                  projectLive: {live},
                  projectCode: {code},
                  projectMainCopy: {mainCopy},
                  projectLeftTitle: {leftTitle},
                  projectLeftImg: {leftImg},
                  projectLeftCopy: {leftCopy},
                  projectRightTitle: {rightTitle},
                  projectRightImg: {rightImg},
                  projectRightCopy: {rightCopy},
                  projectLeftSecTitle: {leftSecTitle},
                  projectLeftSecImg: {leftSecImg},
                  projectLeftSecCopy: {leftSecCopy},
                  projectRightSecTitle: {rightSecTitle},
                  projectRightSecImg: {rightSecImg},
                  projectRightSecCopy: {rightSecCopy},
                  projectLeftThirdTitle: {leftThirdTitle},
                  projectLeftThirdImg: {leftThirdImg},
                  projectLeftThirdCopy: {leftThirdCopy},
                  projectRightThirdTitle: {rightThirdTitle},
                  projectRightThirdImg: {rightThirdImg},
                  projectRightThirdCopy: {rightThirdCopy}
                }
                
                }}>
              <div><p className="portfolioText">{name}</p>
              <p className="portfolioSubText">{subName}</p></div>
              </Link>
            </div>

      </div>

      )
  
}

export default PortfolioCards;