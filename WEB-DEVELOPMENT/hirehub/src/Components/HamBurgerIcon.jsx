import React from 'react';

const HamburgerIcon = ({ isOpen, onClick, color }) => {
    const lineStyles = {
        width: '24px',
        height: '2px',
        backgroundColor: color,
        margin: '5.5px 0',
        transition: 'transform 0.3s ease',
        borderRadius: '30px'
    };

  

    return (
        <div className="cursor-pointer flex items-center" onClick={onClick}>
            <div className="relative w-6 h-6">
                <div style={{ ...lineStyles, width: '24px', height: '2px', transform: isOpen ? 'rotate(44deg) translate(5.5px, 5px)' : 'none' }} />
                <div style={{ ...lineStyles, width: '20px', height: '2px', transform: isOpen ? 'scale(0)' : 'none' }} />
                <div style={{ ...lineStyles, width: '24px', height: '2px', transform: isOpen ? 'rotate(-47deg) translate(6px, -5px)' : 'none' }} />
            </div>
        </div>
    );
};

export default HamburgerIcon;
