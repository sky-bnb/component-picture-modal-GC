import React from 'react';
import './carouselPic.css';

const CarouselPic = ({ currentPicture }) => {
  const {url} = currentPicture;
  return (
    <div className="carousel">
      <img className="carousel-img" src={url} />
    </div>
  );
};

export default CarouselPic;
