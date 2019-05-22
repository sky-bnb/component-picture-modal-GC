import React from 'react';

class Photo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-4">
        <img className="photo" src={this.props.url} />
      </div>
    );
  }
}

export default Photo4;