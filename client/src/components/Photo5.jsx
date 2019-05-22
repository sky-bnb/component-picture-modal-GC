import React from 'react';
import photos from '../sample_data.js';

class Photo5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-5">
        <img className="photo" src={photos[4]} />
      </div>
    );
  }
}

export default Photo5; 