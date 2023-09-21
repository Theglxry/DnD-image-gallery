import React from "react";
// import { signOut } from "firebase/auth";
// import {database} from "../../libs/firebase";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GalleryComp from "../../components/gallery/galleryComp";
import SearchBar from "../../components/gallery/Search";
import SearchResults from "../../components/gallery/SearchResult";
import axios from "axios";





const accessKey = "euLYxIZkz1eKpqHB1VzIIxLpCevhtSUhBdcm-8g5PeY";
const apiUrl = `https://api.unsplash.com/photos?client_id=${accessKey}`;





function ImageGallery() {

  const [galleryImages, setGalleryImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);
  const [displayImages, setDisplayImages] = useState(true);
  const [displaySearchResults, setDisplaySearchResults] = useState(false);

  const handleSearch = async (query) => {
    try {
      // Perform the search and update searchImages state
      const searchResponse = await axios.get(
        `https://api.unsplash.com/photos/random?count=10&query=${query}&client_id=${accessKey}`
      );
      setSearchImages(searchResponse.data);
    } catch (error) {
      console.error("Error fetching images from Unsplash:", error);
    }

    // Set displayImages and displaySearchResults states accordingly
    setDisplayImages(false);
    setDisplaySearchResults(true);
  };

  // Fetch images from Unsplash for the gallery
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setGalleryImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images from Unsplash:", error);
      });
  }, []);

  // Function to handle drag-and-drop
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    // Check if the drag-and-drop is within the gallery or search results
    if (result.source.droppableId === "image-gallery") {
      const reorderedGalleryImages = [...galleryImages];
      const [movedImage] = reorderedGalleryImages.splice(
        result.source.index,
        1
      );
      reorderedGalleryImages.splice(result.destination.index, 0, movedImage);
      setGalleryImages(reorderedGalleryImages);
    } else if (result.source.droppableId === "search-results") {
      const reorderedSearchImages = [...searchImages];
      const [movedImage] = reorderedSearchImages.splice(
        result.source.index,
        1
      );
      reorderedSearchImages.splice(result.destination.index, 0, movedImage);
      setSearchImages(reorderedSearchImages);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <ImageGallery
        displayImages={displayImages}
        images={galleryImages}
        onDragEnd={onDragEnd}
      />
      <SearchResults
        displaySearchResults={displaySearchResults}
        searchImages={searchImages}
        onDragEnd={onDragEnd}
      />
    </div>
  );
}

















  // return (
  //   <div className="flex-col h-screen">
  //     <div>
  //       <SearchBar />
  //     </div>

  //     <div className="w-full pt-24  ">
  //     {/* imageGallery */}
  //       <GalleryComp />
  //     </div>
  //   </div>
  // );


export default ImageGallery;

















/*
import React, { useState } from 'react';

import SearchBar from './SearchBar'; // Adjust the path as needed

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = (newImages) => {
    setImages(newImages);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
*/
