import React from 'react';
import Photo1 from './Photo1.jsx';
import Photo2 from './Photo2.jsx';
import Photo3 from './Photo3.jsx';
import Photo4 from './Photo4.jsx';
import Photo5 from './Photo5.jsx';
import './photoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Photo1 clickPicture={this.props.clickPicture} url={this.props.pictures[0].url}/>
        <Photo2 url={this.props.pictures[1].url}/>
        <Photo3 url={this.props.pictures[2].url}/>
        <Photo4 url={this.props.pictures[3].url}/>
        <Photo5 url={this.props.pictures[4].url}/>
      </div>
    )
  }

}

export default PhotoGallery;