import React from "react";
// import { signOut } from "firebase/auth";
// import {database} from "../../libs/firebase";
// import { useNavigate } from "react-router-dom";
import GalleryComp from "../../components/gallery/galleryComp";
import SearchBar from "../../components/gallery/Search";






 




function ImageGallery() {

   
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <GalleryComp />
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
