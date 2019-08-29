import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn("App constructor")
    this.setState({})
  }

  componentDidMount(){//DOMContentLoaded
    console.warn("App componentDidMount")
    //fetch call to get tasks and then update state.taskList
    //state.taskList exists in App, so
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasks => {
      this.setState({  taskList: tasks  })
    })
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
  }

  //state changing callbacks
  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    console.log(`adding new task`)
    //we do waht to update the database
    fetch('http://localhost:3000/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText
      })
    }).then(res => res.json())
    .then(newTask => {
      //update our front end => update state
      this.setState({
        taskList: [...this.state.taskList, newTask]
      })
    })
  }

  onDeleteTask = (taskObj) => {
    //you can work with taskObj in this scope
    this.setState({
      taskList: this.state.taskList.filter(task => task !== taskObj)
    })
    fetch(`http://localhost:3000/tasks/${taskObj.id}`, {
      method: "DELETE"
    })
  }

  render() {
    console.warn("App render")
    return (
      <div className="App">
        <Form
          onChangeOfForm={this.onTypingChange}
          onSubmitOfForm={this.onAddNewTask}
        />
        <TaskList
          tasks={this.state.taskList}
          onDeleteTask={this.onDeleteTask}
        />
      </div>
    );
  }
}

export default App;
