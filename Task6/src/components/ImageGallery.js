import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';
import Modal from './Modal';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: 'Client-ID 26vQRiFydJDbKsG9t3156389jBuMq1LFKLNZ0ZLd1n0', // Replace with your Access Key
          },
          params: {
            count: 12, // Number of random images you want to fetch
            timestamp: new Date().getTime(), // Add a unique parameter to avoid caching
          },
        });
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} openModal={openModal} />
      ))}

      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGallery;
