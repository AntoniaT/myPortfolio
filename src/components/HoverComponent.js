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
            <div className="uxAnswer">I usually start my process with an extensive research. This includes market and competitor research, either as desk research or by gathering my own data via surveys or interviews. To manage my projects, I work with different methods: usually I choose Kanban, which I set up in Trello Boards, but I also have experience with Design sprints and Scrum.</div>
            ) : ('')
          }
          {this.state.hoverDefine ? (
            <div className="uxAnswer">In the next step, I define the customers with the help of Personas and identify stakeholders for the product. A problem formulation and description helps to understand the scope and purpose of the project.</div>
            ) : ('')
          }
          {this.state.hoverIdeate ? (
            <div className="uxAnswer">The goal with ideation is to produce as many ideas as I can to address the problem statement in a judgment-free environment. There are many methods to choose from: this could be Sketching, Rapid Prototyping, Mind Mapping, Card Sorting or the Crazy 8’s.</div>
            ) : ('')
          }
          {this.state.hoverPrototype ? (
            <div className="uxAnswer">To keep costs to a minimum, I find it useful to start off and do early user testing with paper prototypes. This is where changes are quick to implement and still cheap. It is furthermore a good indicator to see if my early assumptions about the expected user reaction were true. Moving on with wireframes gives me and stakeholders a structured overview of the flows and the architecture of the project.</div>
            ) : ('')
          }
          {this.state.hoverValidate ? (
            <div className="uxAnswer">Validation is a very important step in the UX process to identify problems in the design and to learn about the target user’s behaviour. To validate design and functional choices, I conduct user tests. From Think Aloud Test to 5 Second Test, BERT or A/B Test, Eye tracking or expert review — there are many ways to validate decisions as a designer. The goal is to make the product as usable, user-friendly and desirable as possible.</div>
            ) : ('')
          }
        </div>
      );
  }
}

export default HoverComponent;