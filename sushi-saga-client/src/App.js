import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushi: [],
      conveyorPosition: 0,
      budget: 200,
      emptyPlates: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({sushi: json}))
    .catch(err => console.error(err))
  }

  incrementConveyor = () => {
    this.setState({ conveyorPosition: (this.state.conveyorPosition+1) % 25})
  }

  eatSushi = (sushi) => {
    if (this.state.budget >= sushi.price && !sushi.eaten) {

      let newSushi = this.state.sushi.map(s => {
        s.eaten = (s === sushi || s.eaten) 
        return s
      })

      this.setState({ emptyPlates: [...this.state.emptyPlates, 'plate'], sushi: newSushi, budget: this.state.budget - sushi.price })
    }
  }

  addMoney = (event, amount) => {
    event.preventDefault()
    this.setState({ budget: this.state.budget + parseInt(amount) })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.conveyorPosition*4, this.state.conveyorPosition*4+4)}
          incrementConveyor={this.incrementConveyor} eatSushi={this.eatSushi} />
        <Table emptyPlates={this.state.emptyPlates} budget={this.state.budget}/>
        <Wallet addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;