import React from 'react';
import ImageGallery from './components/ImageGallery';
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <div className="App">
      <h1>Random Image Gallery</h1>
      <ImageGallery />
    </div>
  );
};

export default App;
