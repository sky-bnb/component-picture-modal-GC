import React from 'react';
import './photo2.css';

class Photo2 extends React.Component {
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
    return (
      <div className="photo-2" onClick={e => this.onPhotoClick(e)}>
        <img className="photo" src={this.state.picture.url} />
      </div>
    );
  }
}

export default Photo2;