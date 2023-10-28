// src/components/VisitorCount.js

import React, { useState, useEffect } from 'react';



const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(null);

   // Function to fetch the visitor count from the PHP backend
   const fetchVisitorCount = async () => {
    try {
        const response = await fetch('https://himalayanpackages.com/himalayan/visitorcount.php');
        const data = await response.json();
        setVisitorCount(data.count);
        console.log('Received visitor count:', data.count);
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
};
  useEffect(() => {
    // Fetch the visitor count immediately when the component mounts
    fetchVisitorCount();

    // Set up an interval to fetch the visitor count every second (1000 milliseconds)
    const intervalId = setInterval(fetchVisitorCount, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

 
};

export default VisitorCount;
