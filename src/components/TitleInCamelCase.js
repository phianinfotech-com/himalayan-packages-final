import React from 'react';

function TitleInCamelCase({ title }) {
  // Split the title into words using a space as the delimiter
  const words = title.split(' ');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back together to form the camel case title
  const camelCaseTitle = words.join(' ');

  return (
    <div>
      {camelCaseTitle}
    </div>
  );
}

export default TitleInCamelCase;
