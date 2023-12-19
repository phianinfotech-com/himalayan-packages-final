// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      <div className="p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          {/* Add more links for other sections */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
