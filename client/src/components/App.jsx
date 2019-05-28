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
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/house/110',
    })
      .then((house) => {
        console.log(house)
        this.setState({pictures: house.data.pictures}, () => console.log('set state', house.data.pictures));
      });
  }

  exitModal() {
    this.setState({ showModal: false });
  }

  clickPicture(obj) {
    console.log('was invoked');
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
