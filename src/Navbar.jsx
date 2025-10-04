import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerImg from './assets/banner.jpg'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";




const Navbar = () => {
    const link =
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-bold underline"
                            : "hover:text-black"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-bold underline"
                            : "hover:text-black"
                    }
                >
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "text-black font-bold underline"
                            : "hover:text-black"
                    }
                >
                    Dashboard
                </NavLink>
            </li>


        </>
    return (
        <div className='p-4 lg:p-8'>
             <div className=" lg:max-w-7xl mx-auto relative z-10 rounded-lg bg-[#9538E2] text-white shadow-sm">
            <div className='navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
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

                <div className=" ml-[200px] flex gap-6 ">
                    <button className='text-black bg-white w-5 h-5 rounded-full '><IoCartOutline className='ml-0.5' />
                    </button>
                    <button className='text-black bg-white w-5 h-5 rounded-full'><MdOutlineFavoriteBorder className='ml-0.5' />
                    </button>


                </div>

            </div>
            <div className='mx-auto max-w-[420px] lg:max-w-4xl text-center mt-10'>
                <h2 className="text-3xl lg:text-5xl mb-10 font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>

                <div className='max-w-[420px] lg:max-w-2xl  mx-auto text-center'>
                    <p className=' mb-10'><p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p></p>

                    <button className='bg-white mb-72 hover:bg-slate-200 text-[#9538E2] text-lg h-[50px] w-[150px] font-bold rounded-2xl p-2 m-2'>Shop Now</button>
                </div>
            </div>

            <div className='max-w-[350px] -mt-[200px] ml-14 lg:max-w-[780px]   rounded-xl border-[15px] border-black/10 absolute z-5 lg:-mt-[260px] lg:ml-[280px]'>
                <img className=' rounded-md h-[300px]  lg:h-[420px]' src={bannerImg} alt="" />
            </div>


        </div>
        </div>
       
    );
};

export default Navbar;