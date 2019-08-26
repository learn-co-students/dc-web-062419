import React from 'react'

// class Comment extends React.Component{
//   render(){
//     console.log(this.props.commentObj)
//     return (
//       <li>
//         {this.props.commentObj.content} - by {this.props.commentObj.author}
//       </li>
//     )
//   }
// }
const Comment = (props) => {
  console.log(props)
  return (
    <li>
      {props.commentObj.content} - by {props.commentObj.author}
    </li>
  )
}

export default Comment
//Under the Hood, our code is being translated
//React.render()
//document.createElement()
