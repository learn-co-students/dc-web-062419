import React, {Component} from 'react';
import './App.css';
import CommentContainer, {SomethingElse} from './CommentContainer'

class App extends Component {
  render(){
    return (
        <div className="green">
          <h2>Hello World!</h2>
          <p>
            created today...
          </p>
          <CommentContainer />
        </div>
    )
  }
}

export default App

//Babel is taking
//<div>Hello World!</div>
//React.render()
//document.createElement()
