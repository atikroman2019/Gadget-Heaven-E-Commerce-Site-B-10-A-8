import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerImg from './assets/banner.jpg'

const Navbar = () => {
    const link =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>


        </>
    return (
        <div className=" bg-[#9538E2] text-white shadow-sm">
            <div className='navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
            <div className='mx-auto max-w-4xl text-center mt-10'>
                <h2 className="text-5xl mb-10 font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>

                <div className='max-w-2xl mx-auto text-center'>
                    <p className='mb-10'><p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p></p>

                    <button className='bg-white mb-10 text-[#9538E2] text-lg h-[50px] w-[150px] font-bold rounded-2xl p-2 m-2'>Shop Now</button>
                </div>
            </div>

            <div className='max-w-4xl mx-auto'>
                <img className='max-w-3xl' src={bannerImg} alt="" />
            </div>


        </div>
    );
};

export default Navbar;