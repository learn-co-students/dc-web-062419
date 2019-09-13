import React, {Component} from 'react'
import Header from './Header'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}
export default App


// const withCount = (SomeComponent) => {
//   class BetterComponent extends Component{
//     render(){
//       return <SomeComponent {...this.props} count={???point to the store} />
//     }
//   }
//   return BetterComponent
// }
//CountHeader = withCount(Header)

//HOC is a function that takes in a component and returns a copy of that component
// const BlueHeader = withColor(Header, "blue")
// const RedHeader = withColor(Header, "red")
