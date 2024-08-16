import React from 'react';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <img className="modal-content" src={image.urls.regular} alt={image.alt_description} />
    </div>
  );
};

export default Modal;
