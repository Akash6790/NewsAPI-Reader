import React, { Component } from 'react';
import loadingGif from './Fading lines.gif';   // clearer name

export class Loading extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={loadingGif} alt="loading..." />
      </div>
    )
  }
}

export default Loading;
