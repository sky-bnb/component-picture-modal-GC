import React from 'react';
import photos from '../sample_data.js';

class Photo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img src={photos[1]} />
    );
  }
}

export default Photo2;