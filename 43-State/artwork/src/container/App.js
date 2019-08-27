import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Navbar from '../component/Navbar'
import Searchbar from '../component/Searchbar'
import PaintingsDetails from '../component/PaintingsDetails'

//state is gonna live in App
class App extends Component {
  constructor(){
    super()
    this.state = {
      searchInput: "",
      currentPainting: null
    }
  }
  // state = {
  //   searchInput : ""
  // }

  updateSearchInput = (event) => {
    this.setState({searchInput: event.target.value})
  }

  //if we want to update state, we write a state chaning callback
  updateCurrentPainting = (painting) => {
    this.setState({currentPainting: painting})
  }

  render() {
    return (
      <div className="App">
        <Navbar
          title="ArtisteHub"
          tagline="List of Paintings"
          icon="eye slash"
          color="orange"
        />
        <PaintingsDetails
          paintingToShow={this.state.currentPainting}
        />
        <Searchbar
          searchInput={this.state.searchInput}
          changeSearchInput={this.updateSearchInput}
        />
        <PaintingsContainer
          searchInput={this.state.searchInput}
          changePainting={this.updateCurrentPainting}
        />
      </div>
    );
  }
}

export default App;
