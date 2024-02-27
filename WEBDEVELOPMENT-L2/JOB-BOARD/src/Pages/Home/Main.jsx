import React from 'react';
import Jobs from './Jobs';
import TopCompanies from './TopCompanies';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className='main-div-1'>
                <div className='title'>
                    <h2>Search by  Categories</h2>
                </div>
                <div className='categories'>
                    <div className='div-11'>
                        <h2>IT</h2>
                        <button className='cat-btn'>Software Developer</button>
                        <button className='cat-btn'>Systems Analyst</button>
                        <button className='cat-btn'>Network Administrator</button>
                        <button className='cat-btn'>Database Administrator</button>
                        <button className='cat-btn'>Full Stack Developer</button>
                        <button className='cat-btn'>Data Analyst</button>
                    </div>
                    <div className='div-11'>
                        <h2>Health Care</h2>
                        <button className='cat-btn'>Physical Therapist</button>
                        <button className='cat-btn'>Medical Assistant</button>
                        <button className='cat-btn'>Registered Nurse</button>
                        <button className='cat-btn'>Physician</button>
                        <button className='cat-btn'>Pharmacist</button>
                        <button className='cat-btn'>Surgeon</button>
                    </div>
                    <div className='div-11'>
                        <h2>Finance</h2>
                        <button className='cat-btn'>Accountant</button>
                        <button className='cat-btn'>Financial Analyst</button>
                        <button className='cat-btn'>Investment Banker</button>
                        <button className='cat-btn'>Auditor</button>
                        <button className='cat-btn'>Financial Planner</button>
                        <button className='cat-btn'>Banker</button>
                    </div>
                    <div className='div-11'>
                        <h2>Engineering</h2>
                        <button className='cat-btn'>Civil Engineer</button>
                        <button className='cat-btn'>Mechanical Engineer</button>
                        <button className='cat-btn'>Electrical Engineer</button>
                        <button className='cat-btn'>Software Engineer</button>
                        <button className='cat-btn'>Aerospace Engineer</button>
                        <button className='cat-btn'>Chemical Engineer</button>
                    </div>
                </div>
            </div>
            <div className='additional-contents'>
                <Jobs />
                <TopCompanies />

                <div className='how-it-works'>
                    <div className='image'>
                        <img src='/images/job.jpg' alt="reload"></img>
                    </div>
                    <div className='content'>
                        <h2>How it Works</h2>
                        <p>Joining our job finder platform is a straightforward process
                            designed to connect you with your ideal job. Begin by
                            signing up and creating your account. Once registered,
                            complete your profile, showcasing your skills,
                            experience, and preferences. Explore job listings tailored
                            to your profile and interests. Apply for jobs seamlessly
                            through our platform and track your applications.
                            It's that simple! Take the first step towards a
                            rewarding career today.
                        </p>
                        <center><button className='job-apply btn'
                            style={{
                                backgroundColor: '#464646'
                            }}>Apply for a job</button></center>
                    </div>
                </div>
                
                <div className="post-jobs">
    
                    <div className="content">
                        <h2>Post Your Job Here!</h2>
                        <p>Are you looking to expand your team? Take advantage of our platform to find the perfect candidate for your job opening. With our extensive user base spanning across diverse industries</p>
                        <p>Posting your job on our site is a simple and effective way to connect with talented professionals. 
                            Why not showcase your opportunity to our vibrant community? 
                            Start the journey to finding your ideal candidate today! Fill out the form provided below to post your job listing and let us help you find the perfect match for your team.</p>
                        <center><button className='post-job btn' style={{
                            backgroundColor: '#464646'
                        }}>Post your job</button></center>
                    </div>

                    <div className='image' >
                        <img src='images/post-jobs-img.png' alt='reload'></img>
                    </div>

                </div>

                <div className='faqs'>

                    <div className='image'>
                        <img src='/images/faq.avif' alt='reload'></img>
                    </div>
                    <div className='content'>
                        <h2>FAQ's</h2>
                        <p>Curious about how our platform works? Explore our FAQs
                            to find quick answers to common queries. From account
                            management to job search tips, we've got you covered.
                            If you can't find what you're looking for, feel free to
                            contact us for personalized assistance.</p>
                        <center><button className='faq btn' style={{
                            backgroundColor: 'rgb(9, 96, 118)'
                        }}>View FAQ's</button></center>
                    </div>
                    
                </div>
            </div>
        </div >
    )
}

export default Main