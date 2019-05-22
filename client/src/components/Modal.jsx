/* eslint-disable react/button-has-type */
import React from 'react';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick(e) {
    e.preventDefault();
    this.props.exitModal();
  }

  render() {
    const leftButton = '<';
    return (
      <div className="modal">
        {/* <ModalPhoto />
        <ModalPhotoList />
        <Description />
        <VerifiedPhoto /> */}
        <div className="x-button" onClick={e => this.onButtonClick(e)}>X</div>
        <div className="right-button">></div>
        <div className="left-button">{leftButton}</div>
      </div>
    );
  }
}

export default Modal;
