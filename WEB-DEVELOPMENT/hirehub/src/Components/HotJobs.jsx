import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const jobs = [
    {
      img: "/images/fullstack.avif",
      role: "Fullstack Developer",
      company: "Apple",
      location: "Cupertino, CA",
      description: "Working as a Software Engineer Intern in the Apple Developer Tools team. Responsible for improving and maintaining various tools used by Apple developers.",
    },
    {
      img: "/images/uiux.avif",
      role: "UI/UX Designer",
      company: "Google",
      location: "Mountain View, CA",
      description: "As a UI/UX Designer, contributed to creating seamless and user-friendly interfaces for Google's products.",
    },
    {
      img: "/images/datascience.jpg",
      role: "Data Scientist",
      company: "Microsoft",
      location: "Redmond, WA",
      description: "Engaged in data analysis and machine learning projects as a Data Scientist at Microsoft Research.",
    },
    {
      img: "/images/digitalmarketing.jpg",
      role: "Marketing Specialist",
      company: "Facebook",
      location: "Menlo Park, CA",
      description: "Developed and executed impactful marketing campaigns, fostering brand growth and customer engagement at Facebook.",
    },
    {
      img: "/images/networkengineer.jpg",
      role: "Network Engineer",
      company: "Cisco",
      location: "San Jose, CA",
      description: "Contributing to the design and maintenance of Cisco's network infrastructure, ensuring reliable and efficient communication.",
    },
    {
      img: "/images/dataanalyst.png",
      role: "Data Analyst",
      company: "Tesla",
      location: "Seattle, WA",
      description: "Analyzing large datasets to extract valuable insights and support data-driven decision-making at Amazon.",
    },
    {
      img: "/images/mobiledeveloper.avif",
      role: "Mobile App Developer",
      company: "Amazon",
      location: "Palo Alto, CA",
      description: "Creating cutting-edge mobile applications for Tesla, contributing to the innovation of electric vehicles and sustainable energy solutions.",
    },
    {
      img: "/images/cloudengineer.webp",
      role: "Cloud Engineer",
      company: "Microsoft Azure",
      location: "Redmond, WA",
      description: "Building and optimizing scalable cloud infrastructure as a Cloud Engineer at Microsoft Azure, contributing to cloud computing innovations.",
    }
  ];


  return (

    <div className='overflow-x-hidden mx-24'>
      <div className='flex justify-between text-lg my-5 font-sans'>
        <h2 className='font-bold text-xl'>Hot Jobs</h2>
        <h2><Link to="/search-jobs" className="no-underline text-gray-700 hover:text-blue-600 hover:underline">see more</Link></h2>
      </div>
      <div className='jobs-list py-1 overflow-x-scroll'>
        <ul className='flex gap-5 list-none py-5' style={{ width: 'calc(100% + 1rem)' }}>
          {jobs.map((item, index) => (
            <li key={index} className='flex-none w-80 bg-white py-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
              <center><img src={item.img} alt={`${item.role} at ${item.company}`} className="w-11/12 h-48 rounded-lg transition-transform duration-600 ease-in-out" /></center>
              <div className="m-3">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <span className="text-lg text-gray-700">{item.company}</span>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
              <div className=' relative bottom-0 m-3'>
                <a href={`#${item.location}`} className="text-indigo-500 hover:text-indigo-900 transition-colors duration-300 ease-in-out">
                  {item.location}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style>
        {
          `
          body::-webkit-scrollbar{
            display: none;
          }

          li:hover img{
            transform: scale(1.03);
          }

          .jobs-list::-webkit-scrollbar {
            height: 3px;
          }

          .jobs-list::-webkit-scrollbar-track {
             background-color: #f5f5f5;
          }

          .jobs-list::-webkit-scrollbar-thumb {
             background-color: #989898;
             border-radius: 5px;
          }

          .jobs-list::-webkit-scrollbar-thumb:hover {
             background-color: #555;
          }

          `
        }
      </style>
    </div>
  );
};

export default Jobs;