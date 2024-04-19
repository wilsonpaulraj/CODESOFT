import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle, FaChevronCircleRight } from 'react-icons/fa';
import HamburgerIcon from './HamBurgerIcon';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50 && offset < 150) {
                setScrolled(1);
            } else if (offset >= 150) {
                setScrolled(2);
            } else {
                setScrolled(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className={`fixed top-0 left-0 z-20 w-full transition-colors duration-400 ease-in-out ${getNavbarClass(scrolled)} backdrop-blur-sm`}>
            <nav className="flex items-center justify-between p-4 px-24 md:my-1">
                <div className="md:hidden">
                    <button onClick={toggleSideBar} className="text-2xl focus:outline-none">
                        <FaChevronCircleRight />
                    </button>
                </div>

                <NavLink to="/" className="flex items-center space-x-1">
                    <img src="images/logo.png" alt="logo" className="h-12 w-12" />
                    <span className={`text-xl font-bold ${isHomePage ? 'text-blue-400' : 'text-primary'}`}>
                        Hire<span className="text-white">Hub</span>
                    </span>
                </NavLink>

                <ul className="hidden md:flex gap-8">
                    <NavItem to="/" title="Home" isHomePage={isHomePage} />
                    <NavItem to="/search-jobs" title="Explore" isHomePage={isHomePage} />
                    <NavItem to="/post-jobs" title="Post a Job" isHomePage={isHomePage} />
                    <NavItem to="/my-jobs" title="My Jobs" isHomePage={isHomePage} />
                </ul>

                <ul className="flex items-center gap-4">
                    <li>
                        <FontAwesomeIcon icon={faBell} className={`text-2xl ${isHomePage ? 'text-white' : 'text-primary'}`} />
                    </li>
                    <li className={`flex items-center login rounded-full border border-gray-400 px-4 h-10 md:h-12 ${isHomePage ? 'text-white' : 'text-primary'}`}>
                        <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} color={isHomePage ? "white" : "black"} />
                        <FaUserCircle className="text-2xl ml-5" />
                    </li>
                </ul>
            </nav>

            {isSidebarOpen && (
                <div className="md:hidden bg-white py-2">
                    <NavItem to="/" title="Home" onClick={toggleSideBar} isHomePage={isHomePage} />
                    <NavItem to="/search-jobs" title="Explore" onClick={toggleSideBar} isHomePage={isHomePage} />
                    <NavItem to="/post-jobs" title="Post a Job" onClick={toggleSideBar} isHomePage={isHomePage} />
                    <NavItem to="/my-jobs" title="My Jobs" onClick={toggleSideBar} isHomePage={isHomePage} />
                </div>
            )}
        </header>
    );
};

const NavItem = ({ to, title, isHomePage, onClick }) => (
    <li>
        <NavLink
            to={to}
            onClick={onClick}
            className={`text-base font-medium hover:text-blue-400 ${isHomePage ? 'text-white' : 'text-primary'}`}
            style={{ transition: 'color 0.3s ease-in-out' }} // Example of applying transition to text color
        >
            {title}
        </NavLink>
    </li>
);

const getNavbarClass = (scrolled) => {
    switch (scrolled) {
        case 1:
            return 'bg-gray-800 bg-opacity-65 text-white transition-opacity duration-300 ease-in-out';
        case 2:
            return 'bg-gray-800 bg-opacity-95 text-white transition-opacity duration-300 ease-in-out';
        default:
            return 'bg-transparent text-primary transition-opacity duration-300 ease-in-out';
    }
};

export default Navbar;
