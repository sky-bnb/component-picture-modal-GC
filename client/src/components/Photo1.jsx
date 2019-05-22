import React from 'react';

class Photo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-1">
        <img className="photo" src={this.props.url} />
      </div>
    );
  }
}

export default Photo1; 