import React, { useState } from "react";

import { Link } from "react-router-dom";

import { HiMenuAlt2 } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
export default function Navbar() {
  // change nav color when scrolling

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100) {
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
      <div className="navbar-start sticky max-w-6xl px-2 sm:px-6 lg:px-8  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <HiMenuAlt2 className="h-6 w-6 text-base-100" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primary"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About-us">About us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/Contact-Us">Contact Us </Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <img
            src="/himalayan/uploads/assets/logo.png"
            className="w-20 h-auto"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex  font-medium text-lg ">
        <ul className="menu menu-horizontal px-1  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About-us">About us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/Contact-Us">Contact Us </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div class="relative mt-2 rounded-md shadow-sm m-4 ">
          {/* <input
            type="text"
            name="price"
            id="price"
            class="block w-full rounded-md border-0 py-1.5  pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search Destination, Tours"
          /> */}
        </div>
      </div>
    </div>
  );
}
