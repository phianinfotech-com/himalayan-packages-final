// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-base-100 text-black h-100% md:block hidden font-semibold  drop-shadow-lg ">
      <ul className="menu bg-base-100 w-56 ">
        <div className="items-center">
        <img className="flex mx-auto w-20 h-auto " src="/assets/logo.png" />
        </div>
       

        <li className="mt-10">
        <Link to="/admin/dashboard">Dashboard</Link>
        </li>
       

        <li>
          <details>
            <summary>Package</summary>
            <ul>
              <li>
                <Link>Add Package </Link>
              </li>
              <li>
                <Link>Edit Package </Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Blog</summary>
            <ul>
              <li>
                
                <Link to="/admin/all-blog">All Blog</Link>
              </li>
              <li>
              <Link to="/admin/add-blog">Add Blog</Link>
              
                
              </li>
            </ul>
          </details>
        </li>

        <li>
          
           <Link to="/admin/enquiry">All Enquiry</Link>
            
          
        </li>

        <li>
          <details>
            <summary>Pages</summary>
            <ul>
            <li>
              <Link to="/admin/all-pages">All Pages</Link>
              
                
              </li>
              <li>
                
                <Link to="/admin/add-page">Add Pages</Link>
              </li>
              
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Home Page</summary>
            <ul>
              <li>
                
              <details>
            <summary>Explore</summary>
            <ul>
              <li>
                
                <Link to="/admin/all-Expore">All Explore</Link>
              </li>
              <li>
              <Link to="/admin/add-Expore">Add Expore</Link>
              
                
              </li>
            </ul>
          </details>
              </li>
              <li>
              <details>
            <summary>Best of Place</summary>
            <ul>
              <li>
                
                <Link to="/admin/allbestofplace">All Best of Place</Link>
              </li>
              <li>
              <Link to="/admin/addbestofplace">Add Best of Place</Link>

              
                
              </li>

              
            </ul>
          </details>
              
                
              </li>
            </ul>
          </details>
        </li>

        


        <li>
          <details>
            <summary>Packages</summary>
            <ul>
              <li>
                
              <details>
            <summary>Master Packages</summary>
            <ul>
            <li>
              <Link to="/admin/allpackages">All Packages</Link>
              
                
              </li>
              <li>
                
                <Link to="/admin/addpackageform">Add Package</Link>
              </li>
            </ul>
          </details>
              </li>
              <li>
              <details>
            <summary>Detailed Packages</summary>
            <ul>
            <li>
              <Link to="/admin/alldetailpackages">All Packages</Link>
              
                
              </li>
              <li>
                
                <Link to="/admin/packagedetails">Add Package Details</Link>
              </li>

              
            </ul>
          </details>
              
                
              </li>
            </ul>
          </details>
        </li>

        
      </ul>
    </aside>
  );
};

export default Sidebar;
