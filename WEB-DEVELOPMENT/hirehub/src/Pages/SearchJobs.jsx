import React from 'react'
import JobSearchBanner from '../Components/JobSearchBanner'
import FilterSection from '../Components/FilterSection'
import JobResults from '../Components/JobResults'

const SearchJobs = () => {

  return (
    <div className=' my-32 mx-56'>
      <JobSearchBanner />
      <div className='flex w-full'>
        <FilterSection />
        <JobResults />
      </div>
    </div>
  )
}

export default SearchJobs