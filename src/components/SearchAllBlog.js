import React, { useState } from "react";

const SearchAllBlog = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="join">
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Search Blog..."
        value={searchTerm}
        onChange={handleChange}
        className="input input-bordered input-primary w-full max-w-xs join-item"
      />
      <button type="submit" className="btn join-item rounded-r-full btn-outline btn-primary">
        Search
      </button>
    </form>
   
  </div>
  
  );
};

export default SearchAllBlog;
