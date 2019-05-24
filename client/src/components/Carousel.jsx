import React from 'react';
import CarouselPic from './CarouselPic.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.urls.map((img, index) => <CarouselPic img={img} key={index} />)}
      </ul>
    )
  }
}

export default Carousel;