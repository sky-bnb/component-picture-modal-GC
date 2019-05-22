import React from 'react';
import photos from '../sample_data.js';

class Photo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(photos[0]);
    return (
      <div className="photo-1">
        <img className="photo" src={photos[0]} />
      </div>
    );
  }
}

export default Photo1; 