import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks !== null ? props.tasks.map(task => <Task 
      key={task.id}
      task={task}
      onDeleteTask={props.onDeleteTask}
    />) : null
  )
}
/*
[<Task/>,
<Task/>,
<Task/>]
*/
export default TaskList
