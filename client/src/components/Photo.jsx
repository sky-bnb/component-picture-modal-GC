import React from 'react';
import '../photo.css';
import '../photoGallery.css';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPhotoClick(e) {
    console.log('clicked');
    e.preventDefault();
    this.props.clickPicture(this.props.picture);
  }

  render() {
    const className = `wrapper photo-${this.props.unique}`
    return (
      <div className={className} onClick={e => this.onPhotoClick(e)}>
        <img className='photo' src={this.props.picture.url}/>
      </div>
    )
  }
}

export default Photo; 