// TopCompanies.js

import React from 'react';
import './TopCompanies.css';
import { Link } from 'react-router-dom';

const TopCompanies = () => {
    const topCompanies = [
        { img: "/images/apple.avif", name: "Apple", openings: 1200, leads: 350, description: "Innovative technology company", location: "Cupertino, CA" },
        { img: "/images/google.jpg", name: "Google", openings: 900, leads: 250, description: "Leading search engine company", location: "Mountain View, CA" },
        { img: "/images/microsoft.jpg", name: "Microsoft", openings: 1100, leads: 300, description: "Software and technology company", location: "Redmond, WA" },
        { img: "/images/facebook.jpg", name: "Facebook", openings: 800, leads: 200, description: "Social media giant", location: "Menlo Park, CA" },
        { img: "/images/amazon.avif", name: "Amazon", openings: 1500, leads: 400, description: "E-commerce and cloud computing", location: "Palo Alto, CA" },
        { img: "/images/tesla.webp", name: "Tesla", openings: 600, leads: 150, description: "Electric vehicle and clean energy", location: "Seattle, WA" },
        { img: "/images/cisco.jpg", name: "Cisco", openings: 1000, leads: 280, description: "Networking and technology company", location: "San Jose, CA" },
    ];

    return (
        <div className="top-companies">
            <div className='topCompanies'>
                <h2>Top Companies</h2>
                <h2><Link to="/top-companies">see more</Link></h2>
            </div>
            <ul className="company-logos">
                {topCompanies.map((company, index) => (
                    <li key={index} className="company-item">
                        <div className='company-desc'>
                            <img src={company.img} alt={company.name} />
                            <div className='company-details'>
                                <h3>{company.name}</h3>
                                <span>{company.description}</span>
                                <br />
                                <p>Location: {company.location}</p>
                            </div>
                        </div>
                        <div className='company-stats'>
                            <p>Job Openings: {company.openings}</p>
                            <p>Current Leads: {company.leads}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopCompanies;
