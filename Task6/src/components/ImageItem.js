import React from 'react';

const ImageItem = ({ image, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageItem;
