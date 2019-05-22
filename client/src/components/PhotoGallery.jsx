import React from 'react';
import Photo1 from './Photo1.jsx';
import Photo2 from './Photo2.jsx';
import Photo3 from './Photo3.jsx';
import Photo4 from './Photo4.jsx';
import Photo5 from './Photo5.jsx';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Photo1 />
        <Photo2 />
        <Photo3 />
        <Photo4 />
        <Photo5 />
      </div>
    )
  }

}

export default PhotoGallery;