import React from 'react';
import photos from '../sample_data.js';

class Photo5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img src={photos[4]} />
    );
  }
}

export default Photo5; 