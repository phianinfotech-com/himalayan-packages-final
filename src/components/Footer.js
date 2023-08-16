import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {



  return (
    <>
      {/*footer starts from here */}
      <footer className="text-gray-600 body-font bg-neutral mt-20">
      <div className="flex items-center justify-center">
  <div className="m-2 max-w-5xl items-center">  
    <div className="flex flex-col items-center">
      <img className="flex m-1 w-20 h-auto" src="/himalayan/uploads/assets/logo.png" />{" "}
      <div className="m-2">
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
      </div>


      <div className="flex md:flex-row flex-col">
        <p className="hover:text-primary text-white font-medium m-2">
         
          <ul>
              <Link to='/'>Home</Link> 
           </ul>
        </p>{" "}
        <p className="hover:text-primary text-white font-medium m-2">
          <ul>
            <Link to='/About-us'>About us</Link> 
           </ul>     
        </p>
        <p className="hover:text-primary text-white font-medium m-2">
        <ul>
           <Link to='/page/terms'>Terms and condition</Link> 
        </ul>
        </p>{" "}
        <p className="hover:text-primary text-white font-medium m-2">
        <ul>
           <Link to='/Contact-Us'>Contact Us  </Link> 
        </ul>
        </p>{" "}
        <p className="hover:text-primary text-white font-medium m-2">
        <ul>
           <Link to='/page/policy'> Privacy Policy</Link> 
        </ul>
          
        </p>{" "}
      </div>{" "}
      <div className="text-white font-medium mt-4 text-xs">
  {" "}
  ©2023 himalayanpackages.com All rights reserved.{" "}
  <div className="text-white  font-medium mt-4 text-xs text-center">
  <div className="heart-icon">
      <Link to="https://phianinfotech.com">
        <span style={{ fontSize: '120%', color: 'red' }} className="heart">
          &hearts;
        </span>{" "}
        Made with Love by Phian Infotech
      </Link>
    </div>
  </div> 
  </div>

      
    </div>{" "}
    </div>{" "}
   </div>
      </footer>
      {/*footer ends here */}
    </>
  );
}
