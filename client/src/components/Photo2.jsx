import React from 'react';
import './photo2.css';

class Photo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-2">
        <img className="photo" src={this.props.url} />
      </div>
    );
  }
}

export default Photo2;