
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/home';
import Gallery from '../pages/gallery/ImageGallery';
import ErrorPage from '../pages/ErrorPage';

import Mock from '../mock/mock'



function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* link to gallery */}
          <Route path='/gallery' element={<Gallery />} />  
          <Route path='/mock' element={<Mock />} />  

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
