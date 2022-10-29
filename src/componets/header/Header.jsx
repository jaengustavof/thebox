import React from 'react';
import './header.scss'
import logo from '../../assets/img/logo-thebox.png'

const Header = () => {
  return (
    <header>
        <div className="header-container">
            <a href="#">
                <img src={logo} alt="logo the box" />
            </a>
            <nav className='header-menu'>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header