import React from 'react';

class ModalPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.url} />
      </div>
    );
  }
}

export default ModalPhoto;
