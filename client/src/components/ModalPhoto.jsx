/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './ModalPhoto.css';

class ModalPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="current-photo-container">
        <img className="current-photo" src={this.props.url} />
      </div>
    );
  }
}

export default ModalPhoto;
