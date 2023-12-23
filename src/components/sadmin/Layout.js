// Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; // Import your Dashboard component


const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main content goes here */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {/* Your dashboard components go here */}
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            
          </Switch>
         
        </main>

        
      </div>
    </div>
  );
};

export default Layout;
