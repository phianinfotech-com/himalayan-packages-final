import React from "react";
import { Link } from "react-router-dom";


import MobileMenu from './MobileMenu';


import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {



  return (
    <>



      {/* Mobile menu button */}
      <MobileMenu />
      {/*footer starts from here */}
      <footer className="text-gray-600 body-font bg-neutral ">
      <div className="flex items-center justify-center">
  <div className="m-2 max-w-5xl items-center">  
    <div className="flex flex-col items-center">
      <img className="flex m-1 w-20 h-auto" src="/himalayan/uploads/assets/logo.png" />{" "}
      <div className="m-2">
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-white">
              <BiLogoFacebook className="h-8 w-8 m-2" />
              
              </a>
              <a className="ml-3 text-white">

              <BiLogoInstagram className="h-8 w-8 m-2" />

              </a>
              <a className="ml-3 text-white">

                 <BiLogoLinkedin className="h-8 w-8 m-2" />

              </a>
              <a className="ml-3 text-white">
           
              <BiLogoTwitter className="h-8 w-8 m-2" />


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
        </p>
        <p className="hover:text-primary text-white font-medium m-2">
        <ul>
           <Link to='/Contact-Us'>Contact Us  </Link> 
        </ul>
        </p>
        <p className="hover:text-primary text-white font-medium m-2">
        <ul>
           <Link  to='/page/policy'>Privacy Policy</Link> 
        </ul>
          
        </p>
      </div>
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
