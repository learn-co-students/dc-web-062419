import React from 'react'
import Comment from './Comment'

const commentData = (
  [
    {id: 1, content: "hello", author: "Chine"},
    {id: 2, content: "hi", author: "Trevor"},
    {id: 3, content: "fhueaouhfou", author: "Ann"},
    {id: 4, content: "eve3rything is the worst", author: "paul"},
    {id: 5, content: "eve3rything is the worst", author: "jc"},
    {id: 6, content: "eve3rything is the worst", author: "shannon"}
  ]
)

const CommentContainer = () => {
  console.log(commentData)
  debugger
  return (
    <div className="comment-container">
      This is my Comments!
      {
        commentData.map(comment => <Comment key={comment.id} commentObj={comment}/>)
      }
    </div>
  )
}

// {
//   [
//     <Comment commentObj={commentData[0]}/>,
//     <Comment commentObj={commentData[1]}/>,
//     <Comment commentObj={commentData[2]}/>,
//     <Comment commentObj={commentData[3]}/>
//   ]
// }
// function CommentContainer(){
//   return (<div>fhuioargligygawhpiuagsuhpgas</div>)
// }

// class CommentContainer extends React.Component{
//   render(){
//     return (
//       <div className="comment-container">
//         This is my CommentContainer
//       </div>
//     )
//   }
// }

// class SomethingElse extends React.Component{
//   render(){
//     return <p>fjiueofaiofoao</p>
//   }
// }

export default CommentContainer
// export {SomethingElse}
