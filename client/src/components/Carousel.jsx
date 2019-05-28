import React from 'react';
import CarouselPic from './CarouselPic.jsx';
import './carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const carouselStyle = {
      transform: `translateX(${this.props.transform}px)`,
    };

    return (
      <div className='carousel-container'>
        <div className='carousel-slider' style={carouselStyle}>
          {this.props.pictures.map((picture, index) => <CarouselPic key={index} currentPosition={this.props.currentPosition} position={index} url={picture.url} />)}
        </div>
      </div>
    )
  }
}

export default Carousel;