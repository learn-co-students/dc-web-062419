import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      sushiIndex: 0,
      eatenSushi: [],
      budget: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({
        sushis: sushi
      })
    })
  }

  renderSushi = () => this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)

  nextSushi = () => {
    if(this.state.sushiIndex + 4 < this.state.sushis.length){
      this.setState({
        sushiIndex: this.state.sushiIndex + 4
      })
    } else {
      this.setState({
        sushiIndex: 0
      })
    }
  }

  eatSushi = (sushiObj) => {
    if(this.state.budget >= sushiObj.price){
      this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      budget: this.state.budget - sushiObj.price
    })}
    else{
      alert("You have no more money!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.renderSushi()} 
          nextSushi={this.nextSushi} 
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
        />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;