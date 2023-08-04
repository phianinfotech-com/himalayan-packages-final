import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex items-center justify-between px-4 py-2 text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => handleAccordionClick(index)}
          >
            {item.title}
            <span className={`${activeIndex === index ? 'transform rotate-180' : ''} transition-transform`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 bg-white">
              <p className="text-gray-800">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
