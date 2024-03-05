import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { fetchJobs } from '../../server';
import './JobSearch.css';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
        setSearchResults(data); 
        const frequentCategories = getFrequentCategories(data, 4); 
        setPopularCategories(frequentCategories);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const getFrequentCategories = (data, threshold) => {
    const categoryCounts = data.reduce((counts, job) => {
      counts[job.category] = (counts[job.category] || 0) + 1;
      return counts;
    }, {});

    const frequentCategories = Object.keys(categoryCounts).filter(category => categoryCounts[category] >= threshold);
    return frequentCategories;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    filterSearchResults(searchQuery, searchLocation, category);
  };

  const handleSearch = () => {
    filterSearchResults(searchQuery, searchLocation, selectedCategory);
  };

  const filterSearchResults = (query, location, category) => {
    if (!jobs) return; // Ensure jobs is defined
    let filteredJobs = jobs.filter(job => {
      const isCategoryMatch = category ? job.category === category : true;
      const isQueryMatch = query ? job.title.toLowerCase().includes(query.toLowerCase()) : true;
      const isLocationMatch = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
      return isCategoryMatch && isQueryMatch && isLocationMatch;
    });
    setSearchResults(filteredJobs);
  };

  return (
    <div className='search-jobs-body'>
      <Navbar />
      <div className='job-search'>
        <div className='search-section'>
          <input type="search" name='role-search' placeholder='Search Job Role...' className='role-search' onChange={(e) => setSearchQuery(e.target.value)} />
          <input type="text" name='location-search' placeholder='Location...' className='location-search' onChange={(e) => setSearchLocation(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <button className='filter-btn'><FontAwesomeIcon icon={faFilter} /></button>
        </div>
        <div className="search-categories">
          <div className="category-list">
            {popularCategories.map((category, index) => (
              <div
                key={index}
                className={`category ${selectedCategory === category ? 'selected' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search-results">
        <h2>Search Results</h2>
        <div className="job-listings">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((job, index) => (
              <div key={index} className="job">
                <h3>{job.job_title}</h3>
                <p>{job.company_name}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
