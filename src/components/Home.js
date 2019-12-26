import React from 'react';
import '../css/Home.css';
import HomeAnimation from './HomeAnimation';
import Loader from './Loader';

class Home extends React.Component{
    constructor(){
    super()
    this.state = {
        loading: false
    } 
    }
    componentDidMount() {
        console.log(this.state)
        setTimeout(() => {
           this.setState({loading: true})     
        }, 3000);
        console.log(this.state)
      } 
    render() {
        return (
            <div>{
                ! this.state.loading ?
                <Loader /> :
            <div className="homePage">
             <div className="homeDiv">
                 <HomeAnimation />
             </div>
            </div>
            }</div>
        )
    }
}


export default Home;