import React from 'react';
import modal from './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="modal">
        <section className="modal-main">
          <button>close</button>
        </section>
      </div>
    )
  }
}

export default Modal;