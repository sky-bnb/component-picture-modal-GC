import React from 'react';
import './photo3.css';

class Photo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
    };
  }

  render() {
    return (
      <div className="photo-3">
        <img className="photo" src={this.state.picture.url} />
      </div>
    );
  }
}

export default Photo3;