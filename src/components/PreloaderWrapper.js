// PreloaderWrapper.js
import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import { useNavigate, Outlet } from 'react-router-dom';

const PreloaderWrapper = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data (replace with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          {/* Render your navigation here */}
          <Outlet /> {/* Render the routed component */}
        </div>
      )}
    </div>
  );
};

export default PreloaderWrapper;
