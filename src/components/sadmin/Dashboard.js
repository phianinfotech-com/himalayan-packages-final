import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      // Redirect to the login page if there's no valid token
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {/* ... (dashboard content) */}
    </div>
  );
};

export default Dashboard;
