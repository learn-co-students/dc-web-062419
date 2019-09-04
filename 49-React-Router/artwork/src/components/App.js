import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Switch} from 'react-router-dom'
import NotFound from './NotFound'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: ''
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(paintingsArray => {
      this.setState({
        paintingsList: paintingsArray
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (selectedPainting) => {
    // let paintingId = event.target.dataset.paintingId
    // let selectedPainting = this.state.paintingsList.find(painting => painting.id === paintingId)
    this.setState({
      selectedPainting: selectedPainting
    })
    //returns nothing
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Switch>
          <Route path='/paintings/:id' render={(props)=> {
            let paintingId = props.match.params.id
            let paintingObj = this.state.paintingsList.find(p => p.id === paintingId)
            return paintingObj ? <PaintingDetails painting={paintingObj}/> : <NotFound/>}
          }/>
          <Route path='/paintings' render={() => <PaintingsList
            onSearchHandler={this.onSearchHandler}
            filterTerm={this.state.searchTerm}
            paintings={this.state.paintingsList}
            onSelectPainting={this.onSelectPainting}
          />}/>
          <Route exact path='/' component={About}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
/*
<About />
<PaintingDetails painting={this.state.selectedPainting}/>
<PaintingsList
  onSearchHandler={this.onSearchHandler}
  filterTerm={this.state.searchTerm}
  paintings={this.state.paintingsList}
  onSelectPainting={this.onSelectPainting}
/>
*/
export default App;
