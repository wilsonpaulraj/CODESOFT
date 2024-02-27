import React from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {

    const jobs = [
        {
            img: "/images/fullstack.avif",
            role: "Fullstack Developer",
            company: "Apple",
            location: "Cupertino, CA",
            description: `Working as a Software Engineer Intern in the Apple Developer Tools team. `
                + `Responsible for improving and maintaining various tools used by Apple developers.`,
        },
        {
            img: "/images/uiux.avif",
            role: "UI/UX Designer",
            company: "Google",
            location: "Mountain View, CA",
            description: `As a UI/UX Designer, contributed to creating seamless and user-friendly interfaces for Google's products.`,
        },
        {
            img: "/images/datascience.jpg",
            role: "Data Scientist",
            company: "Microsoft",
            location: "Redmond, WA",
            description: `Engaged in data analysis and machine learning projects as a Data Scientist at Microsoft Research.`,
        },
        {
            img: "/images/digitalmarketing.jpg",
            role: "Marketing Specialist",
            company: "Facebook",
            location: "Menlo Park, CA",
            description: `Developed and executed impactful marketing campaigns, fostering brand growth and customer engagement at Facebook.`,
        },
        {
            img: "/images/networkengineer.jpg",
            role: "Network Engineer",
            company: "Cisco",
            location: "San Jose, CA",
            description: `Contributing to the design and maintenance of Cisco's network infrastructure, ensuring reliable and efficient communication.`,
        },
        {
            img: "/images/dataanalyst.png",
            role: "Data Analyst",
            company: "Tesla",
            location: "Seattle, WA",
            description: `Analyzing large datasets to extract valuable insights and support data-driven decision-making at Amazon.`,
        },
        {
            img: "/images/mobiledeveloper.avif",
            role: "Mobile App Developer",
            company: "Amazon",
            location: "Palo Alto, CA",
            description: `Creating cutting-edge mobile applications for Tesla, contributing to the innovation of electric vehicles and sustainable energy solutions.`,
        },
        {
            img: "/images/cloudengineer.webp",
            role: "Cloud Engineer",
            company: "Microsoft Azure",
            location: "Redmond, WA",
            description: `Building and optimizing scalable cloud infrastructure as a Cloud Engineer at Microsoft Azure, contributing to cloud computing innovations.`,
        }
    ]

    return (
        <div className='jobs'>
            <div className='hot-jobs'>
                <h2>Hot Jobs</h2>
                <h2><Link to="/search-jobs">see more</Link></h2>
            </div>
            <div className='jobs-list'>
                <ul>
                    {jobs.map((item, index) => (
                        <li key={index} className='job-item'>
                            <div className='job-desc'>
                                <div>
                                    <img src={item.img} alt={`job ${index}`} />
                                </div>
                                <div className='job-details'>
                                    <h3>{item.role}</h3>
                                    <span>{item.company}</span>
                                    <br />
                                    <p>{item.description}</p>
                                </div>
                                <div className='location'>
                                    <a href={item.location}>{item.location}</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Jobs