import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


  const [scrolled, setScrolled] = useState(0);
  const handleScroll =  () => {
    const offset = window.scrollY;
    if(offset > 50 && offset < 150){
      setScrolled(1);
    } else if(offset >= 150){
      setScrolled(2);
    } else{
      setScrolled(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled===1?'scrolled-1':''} ${scrolled===2?'scrolled-2':''}`}>
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
