import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>This is Modal</div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));