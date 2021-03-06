/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      showModal: false,
      clickedPicture: null,
    };
    this.clickPicture = this.clickPicture.bind(this);
    this.exitModal = this.exitModal.bind(this);
    this.getRandomId = this.getRandomId.bind(this);
  }

  getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  componentDidMount() {
    this.setState({id: this.getRandomId(100, 201)},() => 
      axios({
        method: 'get',
        url: `http://127.0.0.1:3002/house/${this.state.id}`,
      })
        .then((house) => {
          this.setState({pictures: house.data.pictures});
        })
    ) 
  }

  exitModal() {
    this.setState({ showModal: false });
  }

  clickPicture(obj) {
    this.setState({ showModal: true, clickedPicture: obj });
  }

  render() {
    if (this.state.showModal) {
      return (
        <div>
          <Modal pictures={this.state.pictures} exitModal={this.exitModal} clickedPicture={this.state.clickedPicture} />
          <PhotoGallery clickPicture={this.clickPicture} pictures={this.state.pictures} />
        </div>
      );
    }
    return (
      <div className="App">
        <PhotoGallery clickPicture={this.clickPicture} pictures={this.state.pictures.slice(0, 5)} />
      </div>
    );
  }
}

export default App;
