import React from 'react';
import './photo5.css';

class Photo5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
    };
  }

  render() {
    return (
      <div className="photo-5">
        <img className="photo" src={this.state.picture.url} />
      </div>
    );
  }
}

export default Photo5; 