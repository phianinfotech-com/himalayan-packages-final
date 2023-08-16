import React, { useState, useEffect } from "react"; // Import React and necessary hooks

import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const SearchPackage = ({ handleBlogClick }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State variable to store user's input
  const [suggestions, setSuggestions] = useState([]); // State variable to store fetched suggestions
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1); // State variable to track selected suggestion index
  const navigate = useNavigate(); // Navigate function from react-router-dom for URL navigation

  useEffect(() => {
    // Fetch suggestions whenever search term changes
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `http://localhost/himalayan/search_packages.php?term=${encodeURIComponent(
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

console.log("test")
       
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
          const url = `/collections/${selectedSuggestion.slug}`;
        
          navigate(url); // Navigate to the selected suggestion's URL
          handleBlogClick(selectedSuggestion.slug); // Call handleBlogClick function with the selected suggestion's slug
        } catch (error) {
          console.error("Error navigating to URL:", error);
        }
      }
    }
  };

  return (
    <div >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder=" Search Packages"
        className="input input-bordered input-primary w-full max-w-xs "
      />
      {suggestions.length > 0 && (
        <ul className="mt-2">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`py-2 px-4 ${
                index === selectedSuggestionIndex ? "bg-blue-200" : ""
              }`}
            >
              {suggestion.BName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPackage;