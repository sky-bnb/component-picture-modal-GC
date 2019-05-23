import React from 'react';
import Photo1 from './Photo1.jsx';
import Photo2 from './Photo2.jsx';
import Photo3 from './Photo3.jsx';
import Photo4 from './Photo4.jsx';
import Photo5 from './Photo5.jsx';
import './photoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
    };
  }

  render() {
    return (
      <div className="container">
        <Photo1 clickPicture={this.props.clickPicture} picture={this.state.pictures[0]} />
        <Photo2 picture={this.state.pictures[1]} />
        <Photo3 picture={this.state.pictures[2]} />
        <Photo4 picture={this.state.pictures[3]} />
        <Photo5 picture={this.state.pictures[4]} />
      </div>
    )
  }

}

export default PhotoGallery;