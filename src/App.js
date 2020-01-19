import React, { Component } from 'react';
import { ButtonAppBar } from './components/navBar/navBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar></ButtonAppBar>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
