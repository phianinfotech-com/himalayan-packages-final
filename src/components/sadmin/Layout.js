// Layout.js
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'; // Make sure to import Outlet





import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import AllBlog from '../admin/AllBlogs';
import FetchEnquire from '../admin/FetchEnquire';
import AddBlog from '../pages/AddBlog';
import UpdateBlog from '../admin/UpdateBlog';

const Layout = () => {
  return (
    <div className="flex  bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white m-6   rounded-2xl border-solid  drop-shadow-lg">
          {/* Use Outlet to render nested routes */}
          <Routes>
            <Route
              path="/"
              element={<Outlet />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="enquiry" element={<FetchEnquire />} />
              <Route path="all-blog" element={<AllBlog />} />
              <Route path="add-blog" element={<AddBlog />} />
              <Route path="updateblog/*" element={<UpdateBlog />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;

