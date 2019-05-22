import React from 'react';
import './photo5.css';

class Photo5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-5">
        <img className="photo" src={this.props.url} />
      </div>
    );
  }
}

export default Photo5; 