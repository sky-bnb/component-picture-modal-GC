import React from 'react';
import photos from '../sample_data.js';

class Photo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img src={photos[2]} />
    );
  }
}

export default Photo3;