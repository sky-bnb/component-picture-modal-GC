import React from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery.jsx';
import Save from './Save.jsx';
import house from '../sample_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: house.pictures,
    };
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

  render() {
    return (
      <div>
        <PhotoGallery pictures={this.state.pictures} />
        <Save />
      </div>
    );
  }
}

export default App; 