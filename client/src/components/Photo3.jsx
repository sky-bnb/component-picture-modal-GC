import React from 'react';
import photos from '../sample_data.js';

class Photo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-3">
        <img className="photo" src={photos[2]} />
      </div>
    );
  }
}

export default Photo3;