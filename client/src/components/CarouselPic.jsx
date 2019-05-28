/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './carouselPic.css';

class CarouselPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.position,
    };
  }

  render() {
    if (this.state.index === this.props.currentPosition) {
      return (
        <div className="carousel-slider">
          <img className="carousel-img-bright" src={this.props.url} />
        </div>
      );
    }
    return (
      <div className="carousel-slider">
        <img className="carousel-img" src={this.props.url} />
      </div>
    );
  }
}

export default CarouselPic;
