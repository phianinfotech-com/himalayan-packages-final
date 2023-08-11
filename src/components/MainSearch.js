import React, { useState, useEffect } from "react"; // Import React and necessary hooks

import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const MainSearch = ({ handleMainSearchClick }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State variable to store user's input
  const [suggestions, setSuggestions] = useState([]); // State variable to store fetched suggestions
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1); // State variable to track selected suggestion index
  const navigate = useNavigate(); // Navigate function from react-router-dom for URL navigation

  useEffect(() => {
    // Fetch suggestions whenever search term changes
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `http://localhost/himalayan/api-MainSearch.php?term=${encodeURIComponent(
            searchTerm
          )}`
        );
        const data = await response.json();
        setSuggestions(data); // Update suggestions with fetched data
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (searchTerm !== "") {
      fetchSuggestions(); // Call fetchSuggestions if search term is not empty
    } else {
      setSuggestions([]); // Reset suggestions if search term is empty
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    // Handle input change event
    setSearchTerm(event.target.value); // Update search term state with input value
    setSelectedSuggestionIndex(-1); // Reset selected suggestion index
  };

  const handleKeyDown = async (event) => {
    // Handle keydown events in input field
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      ); // Decrement selected suggestion index or loop to the last suggestion
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      ); // Increment selected suggestion index or loop to the first suggestion
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (
        selectedSuggestionIndex >= 0 &&
        selectedSuggestionIndex < suggestions.length
      ) {
        const selectedSuggestion = suggestions[selectedSuggestionIndex];
        try {
          const url = `/blog/${selectedSuggestion.slug}`;
          navigate(url); // Navigate to the selected suggestion's URL
          handleMainSearchClick(selectedSuggestion.slug); // Call handleBlogClick function with the selected suggestion's slug
        } catch (error) {
          console.error("Error navigating to URL:", error);
        }
      }
    }
  };

  return (
    <div >
      {/* <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder=" Search Blog"
        className="w-full px-4 py-2 rounded-lg border-solid border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      /> */}

   <label className="relative block">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
  </span>
  <input 
  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  placeholder="Search for anything..." 
  type="text" 
  name="search"
  value={searchTerm}
  onChange={handleInputChange}
  onKeyDown={handleKeyDown}
  />
</label>
        
      {suggestions.length > 0 && (
        <ul className="mt-2  ">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`py-2 px-4 ${
                index === selectedSuggestionIndex ? "bg-white-200" : ""
              }`}
            >
              {suggestion.PTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
 
    
  );
};

export default MainSearch;