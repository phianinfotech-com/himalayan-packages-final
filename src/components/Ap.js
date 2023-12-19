import React, { useState} from "react";





export default function Navbar () {
// change nav color when scrolling

const[navbar, setNavbar]=useState(false);



const changeBackground=() =>{
  // console.log(window.scrollY)
  if(window.scrollY >=10){
    setNavbar(true);
  }
else{
  setNavbar(false);
}

};

window.addEventListener('scroll', changeBackground);





  return (
    /* The first line `<div className={navbar ? "navbar sticky top-0 mx-auto bg-white" :"navbar sticky
    top-0 mx-auto border-b-[1px] backdrop-filter  backdrop-blur-sm "} >` is conditionally setting
    the class name of the div based on the value of the `navbar` state variable. If `navbar` is
    true, it sets the class name to "navbar sticky top-0 mx-auto bg-white", otherwise it sets it to
    "navbar sticky top-0 mx-auto border-b-[1px] backdrop-filter  backdrop-blur-sm ". */
    <div className={navbar ? "navbar sticky top-0 mx-auto bg-white text-black" : "navbar sticky top-0 mx-auto border-b-[1px] backdrop-filter  backdrop-blur-lg  text-white"} >
    <div className="navbar-start  max-w-7xl px-2 sm:px-6 lg:px-8  ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <img src="/himalayan/uploads/assets/logo.png" className="w-20 h-auto" alt="" />
      
    </div>
    <div className="navbar-center hidden lg:flex  ">
      <ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
    </div>
  </div>
  );
}
