import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/random?count=10&query=${query}&client_id=YOUR_ACCESS_KEY`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching images from Unsplash:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
