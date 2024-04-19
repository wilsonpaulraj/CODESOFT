import React from 'react';
import { Link } from 'react-router-dom';

const TopCompanies = () => {
  const topCompanies = [
    { img: "/images/apple.avif", name: "Apple", description: "Innovative technology company", location: "Cupertino, CA", industry: "Consumer Electronics", revenue: "$274.5 billion (2020)", employees: "147,000 (2021)" },
    { img: "/images/google.jpg", name: "Google", description: "Leading search engine company", location: "Mountain View, CA", industry: "Internet Services", revenue: "$181.7 billion (2020)", employees: "135,301 (2021)" },
    { img: "/images/microsoft.jpg", name: "Microsoft", description: "Software and technology company", location: "Redmond, WA", industry: "Software", revenue: "$168.1 billion (2020)", employees: "181,000 (2021)" },
    { img: "/images/facebook.jpg", name: "Facebook", description: "Social media giant", location: "Menlo Park, CA", industry: "Social Media", revenue: "$86.0 billion (2020)", employees: "63,404 (2021)" },
    { img: "/images/amazon.avif", name: "Amazon", description: "E-commerce and cloud computing", location: "Palo Alto, CA", industry: "E-commerce", revenue: "$386.1 billion (2020)", employees: "1,298,000 (2021)" },
    { img: "/images/tesla.webp", name: "Tesla", description: "Electric vehicle and clean energy", location: "Seattle, WA", industry: "Automotive", revenue: "$31.5 billion (2020)", employees: "70,757 (2021)" },
    { img: "/images/cisco.jpg", name: "Cisco", description: "Networking and technology company", location: "San Jose, CA", industry: "Networking", revenue: "$49.3 billion (2020)", employees: "75,900 (2021)" },
  ];

  return (
    <div className="top-companies mx-24 my-20">
      <div className='flex justify-between items-center text-lg my-0 font-sans'>
        <h2 className="text-xl font-bold my-0">Top Companies</h2>
        <h2><Link to="/top-companies" className="text-gray-700 hover:text-blue-600 hover:underline">see more</Link></h2>
      </div>
      <div className='company-logos p-1 overflow-x-scroll' style={{ width: 'calc(100% + 1rem)' }}>
        <ul className='flex gap-5 list-none py-5'>
          {topCompanies.map((company, index) => (
            <li key={index} className='flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out'>
              <div className='flex flex-col'>
                <center><img src={company.img} alt={company.name} className="w-11/12 h-48 rounded-t-lg object-cover mt-4 transition-transform duration-600 ease-in-out" /></center>
                <div className='p-4'>
                  <h3 className="text-xl font-semibold">{company.name}</h3>
                  <span className="text-gray-700">{company.description}</span>
                  <p className="mt-2 text-sm text-gray-600">Location: {company.location}</p>
                  <p className="mt-1 text-sm text-gray-600">Industry: {company.industry}</p>
                  <p className="mt-1 text-sm text-gray-600">Revenue: {company.revenue}</p>
                  <p className="mt-1 text-sm text-gray-600">Employees: {company.employees}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style>
        {`
          .company-logos::-webkit-scrollbar {
            height: 3px;
          }

          .company-logos::-webkit-scrollbar-track {
            background-color: #f5f5f5;
          }

          .company-logos::-webkit-scrollbar-thumb {
            background-color: #989898;
            border-radius: 5px;
          }

          .company-logos::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }

          .company-logos li:hover img {
            transform: scale(1.03);
          }
        `}
      </style>
    </div>
  );
};

export default TopCompanies;
