import React from 'react';

const WhatsappBtn = () => {
  return (
    <div className="fixed top-20 right-20">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg 
                   transform transition-transform hover:scale-110"
                   style={{ zIndex: 121 }} // Adjust the z-index value here

      >
        Button
        
      </button>
    </div>
  );
};

export default WhatsappBtn;
