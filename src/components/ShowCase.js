import React from 'react';
import '../css/ShowCase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';

const ShowCase = (props) =>{

   const project = props.location.state.projectName.name;
   const projectImg = props.location.state.projectImage.image;
   const projectSubtitle = props.location.state.projectSubtitle.subtitle;
   const projectCopy = props.location.state.projectMainCopy.mainCopy;
   
   const projectRole= props.location.state.projectRole.role;
   const projectDuration= props.location.state.projectDuration.duration;
   const projectDeliverables= props.location.state.projectDeliverables.deliverables;
   const projectProblem = props.location.state.projectProblem.problem;
   const projectLive = props.location.state.projectLive.live;
   const projectCode = props.location.state.projectCode.code;

   const projectLeftTitle = props.location.state.projectLeftTitle.leftTitle;
   const projectLeftImg = props.location.state.projectLeftImg.leftImg;
   const projectLeftCopy = props.location.state.projectLeftCopy.leftCopy;

   const projectRightTitle = props.location.state.projectRightTitle.rightTitle;
   const projectRightImg = props.location.state.projectRightImg.rightImg;
   const projectRightCopy = props.location.state.projectRightCopy.rightCopy;

   const projectLeftSecTitle = props.location.state.projectLeftSecTitle.leftSecTitle;
   const projectLeftSecImg = props.location.state.projectLeftSecImg.leftSecImg;
   const projectLeftSecCopy = props.location.state.projectLeftSecCopy.leftSecCopy;

   const projectRightSecTitle = props.location.state.projectRightSecTitle.rightSecTitle;
   const projectRightSecImg = props.location.state.projectRightSecImg.rightSecImg;
   const projectRightSecCopy = props.location.state.projectRightSecCopy.rightSecCopy;

   const projectLeftThirdTitle = props.location.state.projectLeftThirdTitle.leftThirdTitle;
   const projectLeftThirdImg = props.location.state.projectLeftThirdImg.leftThirdImg;
   const projectLeftThirdCopy = props.location.state.projectLeftThirdCopy.leftThirdCopy;

/*    const projectRightThirdTitle = props.location.state.projectRightThirdTitle.rightThirdTitle;
   const projectRightThirdImg = props.location.state.projectRightThirdImg.rightThirdImg;
   const projectRightThirdCopy = props.location.state.projectRightThirdCopy.rightThirdCopy;
 */
   //console.log(projectRightImg, projectLeftCopy, projectRightCopy);
  
    return(
            <div className="showCaseMain">
              <Slide bottom>
                <img className="heroImg" src={projectImg} alt="project" />
                <h1>{project}</h1>
                <p className="showCaseMainP">{projectSubtitle}</p>
                <p className="showCaseMainP">{projectCopy}</p>
             </Slide>
                    <ShowCaseMiddle 
                    projectProblem={projectProblem}
                    projectLive={projectLive}
                    projectCode={projectCode}
                    projectRole={projectRole}
                    projectDuration={projectDuration}
                    projectDeliverables={projectDeliverables}/>
                <Slide bottom>
                    <ShowCaseLeft 
                    projectLeftTitle={projectLeftTitle}
                    projectLeftImg={projectLeftImg}
                    projectLeftCopy={projectLeftCopy}
                    />
                </Slide>
                <Slide bottom>
                    <ShowCaseRight 
                    projectRightTitle={projectRightTitle}
                    projectRightImg={projectRightImg}
                    projectRightCopy={projectRightCopy}
                    />
                </Slide>
                <Slide bottom>
                    <ShowCaseSecLeft 
                    projectLeftSecTitle={projectLeftSecTitle}
                    projectLeftSecImg={projectLeftSecImg}
                    projectLeftSecCopy={projectLeftSecCopy}
                    />
                </Slide>
                <Slide bottom>
                    <ShowCaseSecRight
                    projectRightSecTitle={projectRightSecTitle}
                    projectRightSecImg={projectRightSecImg}
                    projectRightSecCopy={projectRightSecCopy}
                    />
                </Slide>
                <Slide bottom>
                    <ShowCaseThirdLeft 
                    projectLeftThirdTitle={projectLeftThirdTitle}
                    projectLeftThirdImg={projectLeftThirdImg}
                    projectLeftThirdCopy={projectLeftThirdCopy}
                    />
                </Slide>
            </div>
            )
        }
const ShowCaseMiddle = ({ projectProblem, projectRole, projectDuration, projectDeliverables, projectLive, projectCode }) => {
    return(
        <div className="showCaseOverviewCont">
        <div className="showCaseOverview">
            <div className="showCaseProblem">
                <h2>THE PROBLEM</h2>
                <p>{projectProblem}</p>
                <div>
                    <h3><FontAwesomeIcon className="problemIcons" icon={faLink} size="lg"/>LINKS</h3>
                    <a href={projectLive} target="blank">Live</a>
                    <a href={projectCode} target="blank">Github</a>
                </div>
            </div>
            <div className="showCaseMiddle">
            <div>
                <h3><FontAwesomeIcon className="problemIcons" icon={faTools} size="lg"/>TOOLS</h3>
                <p>{projectRole}</p>
            </div>
            <div>
                
                <h3><FontAwesomeIcon className="problemIcons" icon={faHourglassEnd} size="lg"/>DURATION</h3>
                <p>{projectDuration}</p>
            </div>
            <div>
                
                <h3><FontAwesomeIcon className="problemIcons" icon={faTruck} size="lg"/>DELIVERABLES</h3>
                <p>{projectDeliverables}</p>
            </div>
            </div>

        </div>
        </div>
    )
}
const ShowCaseLeft = ({ projectLeftTitle, projectLeftImg, projectLeftCopy }) => {
           
        return(
                   <div className="showCaseLeft">
                       <div className="image-wrapper">
                         <img src={projectLeftImg} alt=""/>
                       </div>
                       <div className="showCaseLeftText">
                         <h2>{projectLeftTitle}</h2>
                         <p>{projectLeftCopy}</p>
                       </div>
                   </div>
               )
}
const ShowCaseRight = ({ projectRightTitle, projectRightImg, projectRightCopy }) => {
    return(
        <div className="showCaseRight">
            <div className="image-wrapper">
                 <img src={projectRightImg} alt=""/>
            </div>
            <div className="showCaseRightText">
              <h2>{projectRightTitle}</h2>
              <p>{projectRightCopy}</p>
            </div>
        </div>
    )
}
const ShowCaseSecLeft = ({ projectLeftSecTitle, projectLeftSecImg, projectLeftSecCopy }) => {
           
    return(
               <div className="showCaseLeft">
                   <div className="image-wrapper">
                     <img src={projectLeftSecImg} alt=""/>
                   </div>
                   <div className="showCaseLeftText">
                     <h2>{projectLeftSecTitle}</h2>
                     <p>{projectLeftSecCopy}</p>
                   </div>
               </div>
           )
}
const ShowCaseSecRight = ({ projectRightSecTitle, projectRightSecImg, projectRightSecCopy }) => {
    return(
        <div className="showCaseRight">
            <div className="image-wrapper">
                 <img src={projectRightSecImg} alt=""/>
            </div>
            <div className="showCaseRightText">
              <h2>{projectRightSecTitle}</h2>
              <p>{projectRightSecCopy}</p>
            </div>
        </div>
    )
}
const ShowCaseThirdLeft = ({ projectLeftThirdTitle, projectLeftThirdImg, projectLeftThirdCopy }) => {
           
    return(
               <div className="showCaseLeft">
                   <div className="image-wrapper">
                       <img src={projectLeftThirdImg} alt=""/>
                   </div>
                   <div className="showCaseLeftText">
                     <h2>{projectLeftThirdTitle}</h2>
                     <p>{projectLeftThirdCopy}</p>
                   </div>
               </div>
           )
}
/* const ShowCaseThirdRight = ({ projectLeftThirdTitle, projectLeftThirdImg, projectLeftThirdCopy }) => {
           
    return(
               <div className="showCaseLeft">
                   <img src={projectLeftThirdImg} alt=""/>
                   <div className="showCaseLeftText">
                     <h2>{projectLeftThirdTitle}</h2>
                     <p>{projectLeftThirdCopy}</p>
                   </div>
               </div>
           )
} */

export default ShowCase;
