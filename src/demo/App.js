import React, { Component } from 'react';
import './App.scss';
import '../stage.scss';
import Button from '../components/button/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Buttons</h1>
        <Button text="Text Only" onClick={() => console.log('Click on Snow Button')} />
        <Button icon="user"  />
        <Button text="Icon + Text" icon="user" />
      </div>
    );
  }
}

export default App;
