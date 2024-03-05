import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className={`nav-bar`}>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <img src="\images\logo.png" width="50px" height="50px" alt="Logo" />
                </li>
                <li className='nav-item'>
                    <Link to="/"><span>Home</span></Link>
                </li>
                <li className='nav-item'>
                    <Link to="/profile"><span>Profile</span></Link>
                </li>
                <li className='nav-item'>
                    <Link to="/job-search"><span>Find Jobs</span></Link>
                </li>
                <li className='nav-item'>
                    <Link to="/job-search"><span>Post Jobs</span></Link>
                </li>
            </ul>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
