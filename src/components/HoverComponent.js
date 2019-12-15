import React, { Component } from 'react'
import '../css/AboutCard.css';
import '../css/About.css';

 class HoverComponent extends Component {
  constructor(props){
    super(props);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseHoverResearch = this.handleMouseHoverResearch.bind(this);
    this.handleMouseHoverDefine = this.handleMouseHoverDefine.bind(this);
    this.handleMouseHoverIdeate = this.handleMouseHoverIdeate.bind(this);
    this.handleMouseHoverPrototype = this.handleMouseHoverPrototype.bind(this);
    this.handleMouseHoverValidate = this.handleMouseHoverValidate.bind(this);

    this.state = {
      isHovering: false,
      hoverResearch: false,
      hoverDefine: false,
      hoverIdeate: false,
      hoverPrototype: false,
      hoverValidate: false
    };
  }
  handleMouseHoverResearch(){
    console.log('event is happening')
    this.setState({ hoverResearch: true });
   // this.setState(this.toggleHoverState)
  }  
  handleMouseHoverDefine(){
    this.setState({ hoverDefine: true });
  }
  handleMouseHoverIdeate(){
    this.setState({ hoverIdeate: true });
  }
  handleMouseHoverPrototype(){
    this.setState({ hoverPrototype: true });
  }
  handleMouseHoverValidate(){
    this.setState({ hoverValidate: true });
  }
  handleMouseLeave(){
    this.setState({ hoverResearch: false, hoverDefine: false, hoverIdeate: false, hoverPrototype: false, hoverValidate: false });
  }
/*     toggleHoverState(state){
    return {
      isHovering: !state.isHovering,
      hoverResearch: !state.hoverResearch,
    };
  } */  
  render () {
    return (
      <div>
        <div className="processUX">
            <img 
              onMouseEnter={this.handleMouseHoverResearch} 
              onMouseLeave={this.handleMouseLeave}
              className="researchIcn" 
              src="../images/research-icon.png" 
              alt="icon"/>
              <p>Research</p>
            <img 
              onMouseEnter={this.handleMouseHoverDefine} 
              onMouseLeave={this.handleMouseLeave}
              className="researchIcn" 
              src="../images/diamond-icon-1.png" 
              alt="icon"/>
              <p>Define</p>
            <img 
                onMouseEnter={this.handleMouseHoverIdeate} 
                onMouseLeave={this.handleMouseLeave}
                className="researchIcn" 
                src="../images/../images/bulb-icon-1.png" 
                alt="icon"/>
                <p>Ideate</p>
            <img 
              onMouseEnter={this.handleMouseHoverPrototype} 
              onMouseLeave={this.handleMouseLeave}
              className="researchIcn" 
              src="../images/../images/prototype-icon.png" 
              alt="icon"/>
              <p>Prototype</p>
            <img 
              onMouseEnter={this.handleMouseHoverValidate} 
              onMouseLeave={this.handleMouseLeave}
              className="researchIcn" 
              src="../images/../images/user-icon Kopie.png" 
              alt="icon"/>
              <p>Validate</p>
          </div>
          {this.state.hoverResearch ? (
            <div className="uxAnswer">I usually start my process with an extensive research. This includes market research and competitor research, as well as desk research and sending out surveys to the potential target group of a product. To manage my projects, I worked with different methods. Usually I choose Kanban, which I set up in Trello Boards, but I also have experience with Design sprints and Scrum.</div>
            ) : ('')
          }
          {this.state.hoverDefine ? (
            <div className="uxAnswer">In the next step I define the customers with the help of Personas and identify stakeholders for the product. A problem formulation and description helps to understand the scope and purpose of the project. </div>
            ) : ('')
          }
          {this.state.hoverIdeate ? (
            <div className="uxAnswer">The goal with ideation is to produce as many ideas with an open mind, as I can, to address the problem statement in a facilitated, judgment-free environment. There are many methods to choose from: this can be sketching, rapid prototyping, mind mapping, card sorting or the crazy 8’s.</div>
            ) : ('')
          }
          {this.state.hoverPrototype ? (
            <div className="uxAnswer">To keep costs to a minimum, I find it beneficial to start with paper prototyping and do early user testing with these prototypes. This is where changes are quick to implement and still cheap. It is also a good indicator to see if early assumptions show the expected reaction from the user. Moving on with wireframes gives me and stakeholders a structured overview of the flows and architecture of the project.
            </div>
            ) : ('')
          }
          {this.state.hoverValidate ? (
            <div className="uxAnswer">Validation is a very important step in the UX process to both identify problems in the design and learn about the target user’s behaviour. To validate design and functional choices, I conduct User tests. From 5 seconds test, to think aloud, Bert test, A/B test, eyetracking or expert review — there are many ways to validate decisions as a designer.  The goal is to make the product as usable, user-friendly and desirable as possible.</div>
            ) : ('')
          }
        </div>
      );
  }
}

export default HoverComponent;