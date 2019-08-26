import React, { Component } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar'
import PaintingsContainer from './PaintingsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color="orange"
          title="ArtisteHub"
          subtitle="We're really cool!"
          icon="eye slash outline"
        />
        <PaintingsContainer />
      </div>
    )
  }
}

export default App;
