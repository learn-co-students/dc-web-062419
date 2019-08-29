import React from 'react'
import Details from './Details'

class Hog extends React.Component {
  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }

  onChangeShowDetails = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  getDetails = () => {
    return <div className="extra content">
      <div>
        <p>Specialty: {this.props.specialty}</p>
        <p>Highest Medal Achieved: {this.props["highest medal achieved"]}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Greasy? {this.props.greased.toString()}</p>
      </div>
    </div>
  }

  render(){
    let fileName = this.props.name.toLowerCase().replace(/ /g, "_")
    console.log(this.props)
    return (
      <div className="ui card" onClick={this.onChangeShowDetails}>
        <div className="image">
          <img src={require(`../hog-imgs/${fileName}.jpg`)}/>
        </div>
        <div className="content">
          <div className="header">
            {this.props.name}
          </div>
        </div>
        {
          this.state.showDetails ? <Details {...this.props}/> : null
        }
      </div>
    )
  }
}

export default Hog

/*
<div className="extra content">
  <a>
    <i className="user icon"></i>
    22 Friends
  </a>
</div>*/
