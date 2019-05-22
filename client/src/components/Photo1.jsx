import React from 'react';
import './photo1.css';

class Photo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPhotoClick(e) {
    console.log('clicked');
    e.preventDefault();
    this.props.clickPicture();
  }

  render() {
    return (
      <div className="photo-1" onClick={e => this.onPhotoClick(e)}>
        <img className="photo" src={this.props.url} />
      </div>
    );
  }
}

export default Photo1;
