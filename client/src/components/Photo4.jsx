import React from 'react';
import photos from '../sample_data.js';

class Photo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img src={photos[3]} />
    );
  }
}

export default Photo4;