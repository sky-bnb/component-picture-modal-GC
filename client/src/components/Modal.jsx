/* eslint-disable react/button-has-type */
import React from 'react';
import './modal.css';
import ModalPhoto from './ModalPhoto.jsx';
import Description from './Description.jsx';
import CarouselPic from './CarouselPic.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
      currentPicture: this.props.clickedPicture,
      currentPosition: null, // 0
      length0: null, // 6
      urls: [],
      currentUrl: this.props.clickedPicture.url,
    };
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.getNewPicture = this.getNewPicture.bind(this);
    this.getArrayUrl = this.getArrayUrl.bind(this);
  }

  componentDidMount() {
    this.setState({ currentPosition: this.getCurrentPosition(this.state.currentPicture), length0: this.state.pictures.length - 1 }, () => this.setState({ urls: this.getArrayUrl(this.state.pictures)}));
  }

  getArrayUrl(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].url);
    }
    return result;
  }

  getCurrentPosition(obj) {
    let index;
    for (let i = 0; i < this.state.pictures.length; i++) {
      const picture = this.state.pictures[i];
      if (picture.url === obj.url) {
        index = i;
      }
    }
    return index;
  }

  onButtonClick(e) {
    e.preventDefault();
    this.props.exitModal();
  }

  getNewPicture(index) {
    return this.state.pictures[index];
  }

  onRightClick(e) {
    e.preventDefault();
    if (this.state.currentPosition === this.state.length0) {
      this.setState({ currentPosition: 0 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition) }, () => this.setState({ currentUrl: this.state.currentPicture.url })));
    } else {
      this.setState({ currentPosition: this.state.currentPosition + 1 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition) }, () => this.setState({ currentUrl: this.state.currentPicture.url })));
    }
  }

  onLeftClick(e) {
    e.preventDefault();
    if (this.state.currentPosition === 0) {
      this.setState({ currentPosition: this.state.length0 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition) }, () => this.setState({ currentUrl: this.state.currentPicture.url })));
    } else {
      this.setState({ currentPosition: this.state.currentPosition - 1 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition) }, () => this.setState({ currentUrl: this.state.currentPicture.url })));
    }
  }

  onModalKeyPress(e) {
    if (e.key === 'ArrowRight') {
      this.onRightClick(e);
    }
    if (e.key === 'ArrowLeft') {
      this.onLeftClick(e);
    }
  }

  render() {
    const leftButton = '<';
    const rightButton = '>';
    const {pictures, currentPicture} = this.state;
    return (
      <div className="modal" tabIndex="0" onKeyDown={e => this.onModalKeyPress(e)}>
        <div className="x-button" onClick={e => this.onButtonClick(e)}>x</div>
        <div className="right-button" onClick={e => this.onRightClick(e)}>{rightButton}</div>
        <div onClick={e => this.onLeftClick(e)} className="left-button">{leftButton}</div>
        <ModalPhoto url={this.state.currentUrl} />
        <Description isVerified={this.state.currentPicture.isVerified} position={this.state.currentPosition + 1} size={this.state.length0 + 1} description={this.state.currentPicture.description} />
        <div className={`photo-carousel active-${this.state.currentPosition}`} style={{opacity: 1}}>
          <div className="photo-carousel-wrapper" style={{transform: `translateX(-${this.state.currentPosition*(100/pictures.length)}%)`}}>
            {
            pictures.map(currentPicture => <CarouselPic key={currentPicture._id} currentPicture={currentPicture} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
