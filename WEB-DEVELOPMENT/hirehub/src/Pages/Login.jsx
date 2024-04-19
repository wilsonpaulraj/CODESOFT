import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email: ", email);
        console.log("password: ", password);
        // Wilson Do your Server  Call here to login the user with email and password
    };
    return (
        <div className="  h-screen  bg-[url('/images/login-bg.jpg')] bg-cover bg-slate-300 bg-blend-multiply">
            <div className='flex items-center justify-center w-full h-full flex-wrap backdrop-blur-sm'>
            <div className="mx-16">
                <h1 className="text-white text-6xl font-bold" style={{ textShadow: "0 0 10px  rgba(0, 0, 0, 0.8)", fontFamily: 'sans-serif' }}>
                    Start now. <br /><br /> Find success.<br /><br /> Shape future.
                </h1>
            </div>
            <div className="h-max w-1/3 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm  sm:px-6 lg:px-8 p-10 pb-10 mt-16 rounded-3xl">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <p className="mt-6 text-center text-3xl font-extrabold text-white">Login</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <p className="text-white">Email:</p>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-80 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <p className="text-white">Password:</p>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-80 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <p className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <button type="submit" className="group relative w-44 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0 1 10 0v2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2-2V7a3 3 0 0 1 6 0v2H7zm-2 6v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5H5z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col space-y-4 items-center">
                        <button className=" w-80 h-12 bg-sky-700 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center">
                            <img className='w-10' src="/images/facebook-logo.png" alt="not loded" />
                            <p className="p-3">Continue with Facebook</p>
                        </button>
                        <button className="w-80 h-12 bg-white hover:bg-white-100 text-black py-2 rounded-lg flex items-center justify-center">
                            <img className='w-12' src="/images/google-logo.webp" alt="not loded" />
                            <p className="p-4">Continue with Google</p>
                        </button>
                        <button className=" w-80 h-12 bg-black hover:bg-gray-800 text-white py-2 rounded-lg flex items-center justify-center p-4 ">
                            <img className='invert w-16' src="/images/apple-logo.png" alt="not loded" />
                            <p className="p-5">Continue with Apple</p>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login