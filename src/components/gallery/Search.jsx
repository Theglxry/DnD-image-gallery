import React from "react";
import backgroundImage from "../../assets/images/black2.jpg";
import axios from "axios";

function SearchImages() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=10&query=${query}&client_id=YOUR_ACCESS_KEY`
      );
      onSearch(response.data);
    } catch (error) {
      console.error("Error fetching images from Unsplash:", error);
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
              placeholder="Search for images"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
            />

            <button
              className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchImages;
