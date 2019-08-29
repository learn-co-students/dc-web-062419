import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)//how to initialize state based on initial props
    this.state = {
      color: "black"
    }
    console.warn(`Task #${props.task.id} constructor`)
  }

  componentDidMount(){
    console.warn(`Task #${this.props.task.id} componentDidMount`)
  }

  componentDidUpdate(){
    console.warn(`Task #${this.props.task.id} componentDidUpdate`)
  }

  componentWillUnmount(){
    console.warn(`Task #${this.props.task.id} componentWillUnmount`)
  }

  updateColor = () => {
    switch (this.state.color) {
      case "black":
        this.setState({color: "green"})
        break;
      case "green":
        this.setState({color: "yellow"})
        break;
      case "yellow":
        this.setState({color: "red"})
        break;
      case "red":
        this.setState({color: "black"})
        break;
      default:
        this.setState({color: "black"})
    }
  }

  render(){
    console.warn(`Task #${this.props.task.id} render`)
    return(
      <div>
        <b
          onClick={this.updateColor}
          style={{color: this.state.color}}
        >
          {this.props.task.text}
        </b>
        <button onClick={()=>{this.props.onDeleteTask(this.props.task)}}>x</button>
      </div>
    )
  }
}

export default Task
