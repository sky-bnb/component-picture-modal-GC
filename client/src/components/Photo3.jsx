import React from 'react';
import './photo3.css';

class Photo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-3">
        <img className="photo" src={this.props.url} />
      </div>
    );
  }
}

export default Photo3;