import React from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery.jsx';
import Save from './Save.jsx';
import house from '../sample_data.js';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: house.pictures,
      showModal: false,
    };
    this.clickPicture = this.clickPicture.bind(this);
  }

  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: '/house/110',
  //   })
  //     .then((house) => {
  //       console.log(house);
  //     });
  // }
  clickPicture() {
    console.log('was invoked')
    this.setState({ showModal: true });
  }

  render() {
    if (this.state.showModal) {
      return (
        <div>
          <Modal />
          <PhotoGallery clickPicture={this.clickPicture} pictures={this.state.pictures} />
          <Save />
        </div>
      );
    }
    return (
        <div>
          <PhotoGallery clickPicture={this.clickPicture} pictures={this.state.pictures} />
          <Save />
        </div>
    );
  }
}

export default App;
