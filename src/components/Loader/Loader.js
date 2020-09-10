import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './Loader.css';

export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        className="loader_js"
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
}
