import React from 'react';
import './photo.css';
import './photoGallery.css';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
    };
  }

  onPhotoClick(e) {
    console.log('clicked');
    e.preventDefault();
    this.props.clickPicture(this.state.picture);
  }

  render() {
    const className = `wrapper photo-${this.props.unique}`
    return (
      <div className={className} onClick={e => this.onPhotoClick(e)}>
        <img className='photo' src={this.state.picture.url}/>
      </div>
    )
  }
}

export default Photo; 