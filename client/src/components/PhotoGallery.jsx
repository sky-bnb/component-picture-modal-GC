import React from 'react';
import Photo from './Photo.jsx';
import './photoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures.slice(0, 5),
    };
  }

  render() {
    return (
      <div className='background-container'>
        <div className="container">
          {this.state.pictures.map((picture, index) => <Photo key={index} unique={index} clickPicture={this.props.clickPicture} picture={picture} />)}
        </div>
      </div>
    );
  }
}

export default PhotoGallery;