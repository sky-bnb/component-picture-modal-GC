import React from 'react';

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