import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  increment = (num) => {
    this.props.dispatch( {type: "INCREMENT", payload: num} )
  };

  decrement = (num) => {
    this.props.dispatch( {type: "DECREMENT", payload: num} )
  };

  render() {
    console.log("Counter's props", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={()=>{this.decrement(5)}}> -5 </button>
        <button onClick={()=>{this.decrement(1)}}> - </button>
        <button onClick={()=>{this.increment(1)}}> + </button>
        <button onClick={()=>{this.increment(3)}}> +3 </button>
      </div>
    );
  }
}

//a function that returns an obj that spoecifices hot to inject our prop
const mapStateToProps = (state) => {
    return {count: state.count} //create a props are count
}
export default connect(mapStateToProps)(Counter)
