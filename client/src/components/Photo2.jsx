import React from 'react';
import photos from '../sample_data.js';

class Photo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-2">
        <img className="photo" src={photos[1]} />
      </div>
    );
  }
}

export default Photo2;