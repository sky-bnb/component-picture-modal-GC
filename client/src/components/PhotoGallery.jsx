import React from 'react';
import Photo from './Photo.jsx';
import './photoGallery.css';
import './photo.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='background-container'>
        <div className="container">
          {this.props.pictures.map((picture, index) => <Photo key={index} unique={index} clickPicture={this.props.clickPicture} picture={picture} />)}
        </div>
      </div>
    );
  }
}

export default PhotoGallery;