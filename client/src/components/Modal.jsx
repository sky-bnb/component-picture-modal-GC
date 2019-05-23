/* eslint-disable react/button-has-type */
import React from 'react';
import './modal.css';
import ModalPhoto from './ModalPhoto.jsx';
import Description from './Description.jsx';
import ModalPhotoList from './ModalPhotoList.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
      currentPicture: this.props.clickedPicture,
      currentPosition: null,
      currentIndex: null,
    };
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.getNewPicture = this.getNewPicture.bind(this);
  }

  componentDidMount() {
    this.setState({currentPosition: this.getCurrentPosition(this.state.currentPicture), currentIndex: this.getCurrentPosition(this.state.currentPicture) - 1});
  }

  getCurrentPosition(obj) {
    let position;
    for (let i = 0; i < this.state.pictures.length; i++) {
      const picture = this.state.pictures[i];
      if (picture.url === obj.url) {
        position = i + 1;
      }
    }
    return position;
  }

  onButtonClick(e) {
    e.preventDefault();
    this.props.exitModal();
  }

  getNewPicture(index) {
    return this.state.pictures[index]
  }

  onRightClick(e) {
    e.preventDefault();
    this.setState({currentPosition: this.state.currentPosition + 1, currentIndex: this.state.currentIndex + 1}, () => this.setState({currentPicture: this.getNewPicture(this.state.currentIndex)}));
  }

  render() {
    const leftButton = '<';
    const rightButton = '>';
    return (
      <div className="modal">
        <div className="x-button" onClick={e => this.onButtonClick(e)}>X</div>
        <div className="right-button" onClick={e => this.onRightClick(e)}>{rightButton}</div>
        <div className="left-button">{leftButton}</div>
        <ModalPhoto url={this.state.currentPicture.url} />
        <Description isVerified={this.state.currentPicture.isVerified} position={this.state.currentPosition} size={this.state.pictures.length} description={this.state.currentPicture.description} />
        <ModalPhotoList />
      </div>
    );
  }
}

export default Modal;
