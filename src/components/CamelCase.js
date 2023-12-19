import React from 'react'

const CamelCase = ({ title }) => {
    // Function to convert a string to camel case
    const toCamelCase = (str) => {
      return str
        .split(' ')
        .map((word, index) => {
          if (index === 0) {
            return word.toLowerCase();
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
    };
  
    // Convert the title to camel case
    const camelTitle = toCamelCase(title);
  
    return (
      <div>
        {camelTitle}
      </div>
    );
  };
  