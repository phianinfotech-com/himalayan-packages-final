import React, { useState } from "react";

import { Link } from "react-router-dom";

import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  // change nav color when scrolling

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    /* The first line `<div className={navbar ? "navbar sticky top-0 mx-auto bg-white" :"navbar sticky
    top-0 mx-auto border-b-[1px] backdrop-filter  backdrop-blur-sm "} >` is conditionally setting
    the class name of the div based on the value of the `navbar` state variable. If `navbar` is
    true, it sets the class name to "navbar sticky top-0 mx-auto bg-white", otherwise it sets it to
    "navbar sticky top-0 mx-auto border-b-[1px] backdrop-filter  backdrop-blur-sm ". */
    <div
    className={
      navbar
        ? "navbar sticky top-0 mx-auto bg-white text-primary"
        : " text-sm navbar sticky top-0 mx-auto border-b-[1px] backdrop-filter  backdrop-blur-lg "
    }
  >
    <div className="navbar-start sticky max-w-7xl px-2 sm:px-6 lg:px-8  ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <HiMenuAlt2 className="h-6 w-6 text-base-100" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primary"
        >
          <li>
            <Link to='/'>Home</Link>
            
          </li>
          <li>
          <Link to='/About-us'>About us</Link> 
            </li>
          <li>
          <Link to='/blog'>Blog</Link>
            
          </li>

          <li>
          <Link to='/Contact-Us'>Contact Us  </Link> 
            
          </li>
{/* 
          <li>
          <Link to='/'>Book Now</Link>
           
          </li> */}
        </ul>
      </div>
      <img src="/assets/logo.png" className="w-20 h-auto" alt="" />
    </div>
    <div className="navbar-center hidden lg:flex  font-medium text-lg ">
      <ul className="menu menu-horizontal px-1  ">
      <li>
            <Link to='/'>Home</Link>
            
          </li>
          <li>
          <Link to='/About-us'>About us</Link> 
            </li>
          <li>
          <Link to='/blog'>Blog</Link>
            
          </li>

          <li>
          <Link to='/Contact-Us'>Contact Us  </Link> 
            
          </li>


       
      </ul>
    </div>
    {/* <div className="navbar-end">
        
     

        <label className="relative block">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">

  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
      </div> */}
    </div>
  );
}
