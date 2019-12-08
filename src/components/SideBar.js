import React from 'react';
import '../css/SideBar.css';
import { ReactComponent as Logo } from '../assets/Anck-logo-red.svg';
import { stack as Menu } from 'react-burger-menu';


class SideBar extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
    this.setState({menuOpen: false})
    }
    render(){
        return (
            <div className="mobileNav hideMobile">
             <Menu width={ '100%' }>
                <a onClick={() => this.closeMenu()} href="/" className="menu-item">
                    <Logo className="logo" />
                </a>
                    <a onClick={() => this.closeMenu()} href="/portfolio" className="menu-item">Portfolio</a>
                    <a onClick={() => this.closeMenu()} href="/about" className="menu-item">About</a>
                    <a onClick={() => this.closeMenu()} href="/contact" className="menu-item">Contact</a>
            </Menu>
            </div>
        )
    }
}

export default SideBar;