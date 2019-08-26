import React from 'react'

class Navbar extends React.Component{
  render(){
    return (
      <div className={`ui inverted ${this.props.color} menu navbar`}>
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`}></i>
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.subtitle}</div>
          </h2>
      </div>
    )
  }
}

export default Navbar
