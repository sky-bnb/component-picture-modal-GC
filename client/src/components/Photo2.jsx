import React from 'react';
import './photo2.css';

class Photo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
    };
  }

  render() {
    return (
      <div className="photo-2">
        <img className="photo" src={this.state.picture.url} />
      </div>
    );
  }
}

export default Photo2;