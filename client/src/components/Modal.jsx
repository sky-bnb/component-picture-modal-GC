/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React from 'react';
import '../modal.css';
import ModalPhoto from './ModalPhoto.jsx';
import Description from './Description.jsx';
import Carousel from './Carousel.jsx';

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
      transform: 0,
    };
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.getNewPicture = this.getNewPicture.bind(this);
    this.getArrayUrl = this.getArrayUrl.bind(this);
  }

  componentDidMount() {
    this.setState({ currentPosition: this.getCurrentPosition(this.state.currentPicture), length0: this.state.pictures.length - 1 }, () => this.setState({ urls: this.getArrayUrl(this.state.pictures), transformEnd: -110*this.state.length0 }));
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
      if (picture._id === obj._id) {
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
      this.setState({ currentPosition: 0, transform: 0 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition) }, () => this.setState({ currentUrl: this.state.currentPicture.url })));
    } else {
      this.setState({ currentPosition: this.state.currentPosition + 1 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition) }, () => this.setState({ currentUrl: this.state.currentPicture.url })));
      if (this.state.currentPosition > 2) {
        this.setState({transform: this.state.transform - 110});
      };
    }
  }

  onLeftClick(e) {
    e.preventDefault();
    if (this.state.currentPosition === 0) {
      this.setState({ currentPosition: this.state.length0,transform: this.state.transformEnd }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition)}, () => this.setState({ currentUrl: this.state.currentPicture.url })));
    } else {
      this.setState({ currentPosition: this.state.currentPosition - 1 }, () => this.setState({ currentPicture: this.getNewPicture(this.state.currentPosition)}, () => this.setState({ currentUrl: this.state.currentPicture.url })));
      if (this.state.currentPosition === 4) {
        this.setState({transform: 0})
      }
      if (this.state.currentPosition > 4) {
        this.setState({transform: this.state.transform + 110 });
      }
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
    const { pictures, currentPosition, transform } = this.state;
    return (
      <div className="modal" tabIndex="0" onKeyDown={e => this.onModalKeyPress(e)}>
        <div className="x-button" onClick={e => this.onButtonClick(e)}>x</div>
        <div className="right-button" onClick={e => this.onRightClick(e)}>{rightButton}</div>
        <div onClick={e => this.onLeftClick(e)} className="left-button">{leftButton}</div>
        <div className='container-main'>
          <div className='container-sides' />
          <div className='container-column'>
            <div className='container-center'>
              <ModalPhoto url={this.state.currentUrl} />
              <Description isVerified={this.state.currentPicture.isVerified} position={this.state.currentPosition + 1} size={this.state.length0 + 1} description={this.state.currentPicture.description} />
              <Carousel transform={transform} pictures={pictures} currentPosition={currentPosition} />
            </div>
          </div>
          <div className='container-sides' />
        </div>
      </div>
    );
  }
}

export default Modal;
