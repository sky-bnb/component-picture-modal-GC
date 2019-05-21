import React from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <PhotoGallery className="wrapper" />
      </div>
    );
  }
}

export default App; 