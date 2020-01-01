import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
