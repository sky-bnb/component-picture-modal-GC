import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/house/110',
    })
      .then((house) => {
        console.log(house);
      });
  }

  render() {
    return (
      <div>
        <div id='test'>This is Modal</div>
      </div>
    );
  }
}

export default App; 