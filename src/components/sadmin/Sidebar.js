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
      </ul>
    </aside>
  );
};

export default Sidebar;
