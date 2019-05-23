/* eslint-disable react/button-has-type */
import React from 'react';
import './modal.css';
import ModalPhoto from './ModalPhoto.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
      currentPicture: this.props.clickedPicture,
    };
  }

  // componentDidMount() {
  //   this.setState({currentPicture: this.props.clickedPicture})
  // }

  onButtonClick(e) {
    e.preventDefault();
    this.props.exitModal();
  }

  render() {
    const leftButton = '<';
    const rightButton = '>';
    return (
      <div className="modal">
        {/* <ModalPhoto />
        <ModalPhotoList />
        <Description />
        <VerifiedPhoto /> */}
        <div className="x-button" onClick={e => this.onButtonClick(e)}>X</div>
        <div className="right-button">{rightButton}</div>
        <div className="left-button">{leftButton}</div>
        <ModalPhoto url={this.state.currentPicture.url} />
      </div>
    );
  }
}

export default Modal;
