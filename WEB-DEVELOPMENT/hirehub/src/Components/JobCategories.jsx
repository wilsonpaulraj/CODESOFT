import React from 'react';

const Main = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white bg-blur-sm p-8 -mt-48 w-full'>
            <div className='bg-slate-600 backdrop-blur-xl rounded-lg p-8 text-white mb-8 w-full max-w-6xl'>
                <center><h2 className='text-4xl font-bold mb-4'>Search by Categories</h2></center>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='flex flex-col items-center bg-gray-200 rounded-lg p-4'>
                        <h2 className='text-lg text-gray-600 font-semibold mb-4'>IT</h2>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Software Developer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Systems Analyst</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Network Administrator</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Database Administrator</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Full Stack Developer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Data Analyst</button>
                    </div>
                    <div className='flex flex-col items-center bg-gray-200 rounded-lg p-4'>
                        <h2 className='text-lg text-gray-600 font-semibold mb-4'>Health Care</h2>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Physical Therapist</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Medical Assistant</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Registered Nurse</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Physician</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Pharmacist</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Surgeon</button>
                    </div>
                    <div className='flex flex-col items-center bg-gray-200 rounded-lg p-4'>
                        <h2 className='text-lg text-gray-600 font-semibold mb-4'>Finance</h2>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Accountant</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Financial Analyst</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Investment Banker</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Auditor</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Financial Planner</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Banker</button>
                    </div>
                    <div className='flex flex-col items-center bg-gray-200 rounded-lg p-4'>
                        <h2 className='text-lg text-gray-600 font-semibold mb-4'>Engineering</h2>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Civil Engineer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Mechanical Engineer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Electrical Engineer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Software Engineer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Aerospace Engineer</button>
                        <button className='text-base bg-white text-gray-700 rounded-lg px-4 py-2 mb-2 hover:bg-gray-300 w-full'>Chemical Engineer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
