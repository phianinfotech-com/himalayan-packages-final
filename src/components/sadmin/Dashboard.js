// Dashboard.js
import React from 'react';

const Dashboard = () => {
  // Check for the presence of a valid token (you might want to enhance this check)
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to the login page if there's no valid token
    window.location.href = '/login'; // Use this for a hard redirect
    // or use react-router-dom history.push('/login') for programmatic redirection
    return null; // You might want to render a loading spinner or a login prompt instead
  }

  // Render the dashboard content
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {/* ... (dashboard content) */}
    </div>
  );
};

export default Dashboard;
