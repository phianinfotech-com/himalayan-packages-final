// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-base-100 text-black md:block hidden font-semibold   ">
      <ul className="menu bg-base-100 w-56 ">
        <div className="items-center">
        <img className="flex mx-auto w-20 h-auto " src="/assets/logo.png" />
        </div>
       

        <li className="mt-10">
          <Link >Dashboard</Link>
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
                <Link>All Blog </Link>
              </li>
              <li>
                <Link>Add Blog </Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Enquiry</summary>
            <ul>
              <li>
              <Link to="/enquiry">All Enquiry</Link>
              </li>
              <li>
                <Link>Add Enquiry </Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
