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
      <div>
        <Photo1 className="photo-1" />
        <Photo2 className="photo-2" />
        <Photo3 className="photo-3" />
        <Photo4 className="photo-4" />
        <Photo5 classname="photo-5" />
      </div>
    )
  }

}

export default PhotoGallery;