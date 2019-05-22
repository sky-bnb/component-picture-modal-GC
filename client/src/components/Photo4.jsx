import React from 'react';
import photos from '../sample_data.js';

class Photo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-4">
        <img className="photo" src={photos[3]} />
      </div>
    );
  }
}

export default Photo4;