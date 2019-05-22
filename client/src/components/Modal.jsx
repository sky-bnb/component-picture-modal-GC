import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <section className="modal-main">
          <button>close</button>
        </section>
      </div>
    )
  }
}

export default Modal;