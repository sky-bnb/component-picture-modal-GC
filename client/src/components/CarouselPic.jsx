import React from 'react';
import './carouselPic.css';

class CarouselPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>
        <img className='carousel-img' src={this.props.img} />
      </li>
    );
  }
}

export default CarouselPic;