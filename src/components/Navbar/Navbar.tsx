import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">HOMELAND</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                   <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                             <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        );
                    })}
                </ul>
                <div className="right-content">
                    <h6>CONTACT US</h6>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fas fa-phone"></i>
                    <h6>02 4881 1616</h6>
                    <i className="fas fa-cart-plus"></i>
                </div>
                <button>LOG IN</button>
            </nav>
        );
    }
}

export default Navbar