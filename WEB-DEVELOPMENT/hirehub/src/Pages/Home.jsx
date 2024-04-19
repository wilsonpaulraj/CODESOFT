import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import JobCategories from '../Components/JobCategories';
import HotJobs from '../Components/HotJobs';
import TopCompanies from '../Components/TopCompanies';

const Home = () => {

    const HandleClick = () => {

    }

    return (
        <div className="flex-col items-center justify-center w-full">
            <div className="relative bg-cover bg-[url('/images/home-bg.jpg')] bg-gray-500 bg-blend-multiply h-[85vh] w-full m-0">
                <div className="flex justify-center items-center flex-col">
                    <div className="relative z-10 mt-36 text-center max-w-[75%] mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-[Raleway] my-8">
                            Find a job you enjoy doing, and you will never have to work a day in your life!
                        </h1>
                    </div>
                    <div className="mt-10 flex items-center border-2 border-black rounded-xl bg-gray-100 p-1">
                        <input type="search" name='search-jobs' placeholder="Job Role" className="flex-2 h-10 w-[500px] text-lg p-5 border-r-2 bg-gray-100 border-gray-400 outline-none" />
                        <input type='search' name='search-location' placeholder='Location' className='flex-1 h-10 w-[350px] text-lg p-5 bg-gray-100 rounded-l-lg outline-none' />
                        <button type="button" className="search-icon text-3xl h-14 w-14 bg-gray-100 rounded-full p-3" onClick={HandleClick}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
            <JobCategories />
            <HotJobs />
            <TopCompanies />

            <div className='col-span-1 md:col-span-3'>
                <div className='bg-white bg-blur-sm p-8 text-white space-y-8'>
                    {/* How it Works */}
                    <div className='flex items-center justify-center space-x-56'>
                        <div className='w-1/3'>
                            <img src='/images/job.jpg' alt='reload' className='rounded-lg' />
                        </div> 
                        <div className='w-1/3'>
                            <h2 className='text-2xl text-primary font-bold mb-4'>How it Works</h2>
                            <p className='text-lg text-primary font-[Comfortaa]'>
                                Joining our job finder platform is a straightforward process designed to connect you with your ideal job. Begin by signing up and creating your account. Once registered, complete your profile, showcasing your skills, experience, and preferences. Explore job listings tailored to your profile and interests. Apply for jobs seamlessly through our platform and track your applications. It's that simple! Take the first step towards a rewarding career today.
                            </p>
                            <button className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-4'>
                                Apply for a job
                            </button>
                        </div>
                    </div>

                    {/* Post Your Job */}
                    <div className='flex justify-center items-center space-x-56'>
                        <div className='w-1/3'>
                            <h2 className='text-2xl text-primary font-bold mb-4'>Post Your Job Here!</h2>
                            <p className='text-lg text-primary font-[Comfortaa]'>
                                Are you looking to expand your team? Take advantage of our platform to find the perfect candidate for your job opening. With our extensive user base spanning across diverse industries, posting your job on our site is a simple and effective way to connect with talented professionals. Why not showcase your opportunity to our vibrant community? Start the journey to finding your ideal candidate today! Fill out the form provided below to post your job listing and let us help you find the perfect match for your team.
                            </p>
                            <button className='bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded mt-4'>
                                Post a job
                            </button>
                        </div>
                        <div className='w-1/3'>
                            <div className='bg-white p-4 rounded-lg'>
                                <img src='images/post-jobs-img.png' alt='reload' className='rounded-lg' />
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className='flex justify-center items-center space-x-56'>
                        <div className='w-1/3'>
                            <img src='/images/faq.avif' alt='reload' className='rounded-lg' />
                        </div>
                        <div className='w-1/3'>
                            <h2 className='text-2xl font-bold mb-4 text-primary'>FAQ's</h2>
                            <p className='text-lg text-primary font-[Comfortaa]'>
                                Curious about how our platform works? Explore our FAQs to find quick answers to common queries. From account management to job search tips, we've got you covered. If you can't find what you're looking for, feel free to contact us for personalized assistance.
                            </p>
                            <button className='bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded mt-4'>
                                View FAQ's
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home