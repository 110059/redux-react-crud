import React, {Component} from 'react';
import logo from '.././logo.svg';

export default class Hotel extends Component {
    render() {
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">My Blog</h1>
        </header>
      )

    }
}

