import React from 'react';
import '../description.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.isVerified) {
      return (
        <div className="description-container">
          <div className="description">{`${this.props.position}/${this.props.size}: ${this.props.description}`}</div>
          <div className="verify">Verified Photo</div>
        </div>
      );
    }
    return (
      <div className="description-container">
        <div className="description">{`${this.props.position}/${this.props.size}: ${this.props.description}`}</div>
      </div>
    );
  }
}

export default Description;
