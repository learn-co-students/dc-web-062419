import React from 'react'

const Card = (props) => {
  let {paintingObj: {artist: {name}, title, image, dimensions: {width, height}}} = props
  return (
    <div className="ui card">
      <div>
        <img src={image}/>
      </div>
      <p>{title} by {name}</p>
      <p>Height: {height} x Width: {width}</p>
    </div>
  )
}

// class Card extends React.Component{
//   render(){
//     return (
//       <div>Card</div>
//     )
//   }
// }

export default Card
