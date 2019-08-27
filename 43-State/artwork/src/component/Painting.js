import React from 'react'

const Painting = (props) => {
  let {title, image, artist: {name}, dimensions: {height, width}} = props.painting
  return (
    <div onClick={() => props.changePainting(props.painting)} className="ui card">
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}

export default Painting
