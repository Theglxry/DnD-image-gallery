import React from "react";
import backgroundImage from "../../assets/images/black2.jpg";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query =event.target.value
    setSearchQuery(query)
    onSearch(query)

  };

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };


  

  const mainStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };




  
  return (
    <div style={mainStyle} className="w-full">
      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form
            role="form"
            className="relative flex z-50 bg-white rounded-full"
          >
            <input
              type="text"
              placeholder="search luxury cars "
              className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
              value={query}
              onChange={handleInputChange}
            />
            <button
              className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
              onClick={handleSearchClick}
              disabled={!query}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
