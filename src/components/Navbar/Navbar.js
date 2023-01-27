import React from 'react';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-black drop-shadow-2xl lg:p-6 font-bold">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-4xl font-bold lg:ml-20" href='/'>FindFast AI</a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 lg:flex font-semibold text-lg hidden lg:block">
                    <li><a href='/home' className='mr-14'>Home</a></li>
                    <li><a href='/about'>About us</a></li>
                </ul>
                <a className="btn lg:mr-36 lg:ml-14 text-white" href='/howtouse'>Download</a>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" nav-end menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/pricing'>Pricing</a></li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Navbar;