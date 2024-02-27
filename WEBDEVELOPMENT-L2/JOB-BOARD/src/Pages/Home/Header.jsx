// Header.js
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 

const Header = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/search-jobs');
  }
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="div-1-1">
          <div className="div-1">
            <h1>
              Find a job you enjoy doing, and you will never have to work a day in your life !
            </h1>
          </div>
          <div className="search-bar">
            <input type='search' name='search-location' placeholder='Location' className='search-location' />
            <input type="search" name='search-jobs' placeholder="Job Role" className="search-jobs" />
            <button type="button" className="search-icon" onClick={HandleClick}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
