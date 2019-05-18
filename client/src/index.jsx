/* eslint-disable class-methods-use-this */
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/house', {
      params: {
        houseId: 110,
      },
    })
      .then(house => console.log(house))
      .catch(err => console.log('WHAT HAPPENED', err));
  }

  render() {
    return (
      <div>
        <div id='test'>This is Modal</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
