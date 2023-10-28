import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://himalayanpackages.com/himalayan/visitorcount.php', {
          method: 'POST',
        });
        const data = await response.json();
        console.log('Received visitor count:', data.count);
        setVisitorCount(data.count); // Store the visitor count in state
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="visitor-count">
      {/* Display the visitor count */}
      {visitorCount}
      <br />
      <p>User Count</p>
    </div>
  );
}

export default VisitorCounter;
