import React from 'react';
import '../css/Home.css';
import HomeAnimation from './HomeAnimation';

class Home extends React.Component{
    
    componentDidMount() {
        setTimeout( () => {
           console.log('here is space for the loader!')
            
        }, 2500);
      }
    render() {
        return (
            <div className="homePage">
             <div className="homeDiv">
                 <HomeAnimation />
             </div>
            </div>
        )
    }
}


export default Home;