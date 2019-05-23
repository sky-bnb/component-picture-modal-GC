import React from 'react';
import './photo4.css';

class Photo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
    };
  }

  render() {
    return (
      <div className="photo-4">
        <img className="photo" src={this.state.picture.url} />
      </div>
    );
  }
}

export default Photo4;