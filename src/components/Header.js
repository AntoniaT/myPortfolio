import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HeaderStyle.css';
import { ReactComponent as Logo } from '../assets/Anck-logo-red.svg';
import SideBar from './SideBar';

class Header extends React.Component{
    render() {
        return (
         <div>
            <SideBar/>
            <div className="header hideDesktop">
                <Link exact to="/" className="logo-container">
                  <Logo className="logo" />
                </Link>
                <div className="linkContainer">
                  <Link to="/portfolio">Portfolio</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                </div>
                <Link to="/contact">
                    <img className="emailIcon" src="../images/MailIcon1.png" alt="contact"/>
                </Link>
            </div>
        </div>
        );
    }
  }

export default Header;