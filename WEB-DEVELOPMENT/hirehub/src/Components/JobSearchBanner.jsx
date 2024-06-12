import React from 'react'
import { FaSearch } from 'react-icons/fa'

const JobSearchBanner = () => {
  return (
    <div className='flex-col my-12'>
        <div className='w-full'>
            <h1><span className=' text-7xl font-black text-indigo-500'>Unleash </span><span className=' text-6xl font-black text-[#545454]'>your Potential !</span></h1>
        </div>
        <div className='flex my-4 items-center w-full'>
            <div className=' w-48'>
                <h3 className="text-2xl">
                    Find a perfect job for you
                </h3>
            </div>
            <form className='flex justify-between items-center w-full'>
                <input className=' w-[600px] h-16 outline-none border-slate-500 border-2 p-2 rounded' type="text" placeholder="Job title, skills or company name"/>
                <input className=' w-96 h-16 outline-none border-slate-500 border-2 p-2 rounded'  type="text" placeholder="Location"/>
                <button className='bg-indigo-600 w-16 h-16 text-3xl hover:bg-indigo-800 text-white flex justify-center items-center font-bold rounded-full'><FaSearch /></button>
            </form>
        </div>

    </div>
  )
}

export default JobSearchBanner