import React from 'react';
import photos from '../sample_data.js';

class Photo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img src={photos[0]} />
    );
  }
}

export default Photo1; 