import React, {Component} from 'react'
import {connect} from 'react-redux'

//inject a prop into Header that is equal to the count state in the store
//Try to create a prop called count that is mapped with the count state
class Header extends Component {
  render() {
    console.log("Header's props: ", this.props)
    return (
      <header className="App-header">
        <h1 className="App-title" >Welcome to React</h1>
        <h3>{`The current count is less than ${this.props.count + 5 - this.props.count % 5}`}</h3>
      </header>
    );
  }
}
//a function that returns an obj that spoecifices hot to inject our prop
const mapStateToProps = (state) => {
    return {count: state.count} //create a props are count
}

// const withCount = connect(mapStateToProps)//withCount is a function
// const ConnectedHeader = withCount(Header)//CountHeader is a component that has this count prop
// export default ConnectedHeader

export default connect(mapStateToProps)(Header)//this can be re-written as^^
