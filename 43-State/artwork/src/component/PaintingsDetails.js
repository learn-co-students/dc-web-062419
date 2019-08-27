import React from 'react'
import {isEmpty} from 'lodash'

const PaintingsDetails = (props) => {
  console.log(props.paintingToShow)
  // let p = props.paintingToShow
  return !!props.paintingToShow ? (
    <div className="ui card">
      <div>
        <img alt={props.paintingToShow.title} src={props.paintingToShow.image} />
      </div>
      <p>{`${props.paintingToShow.title} by ${props.paintingToShow.artist.name}`}</p>
    </div>
  ) : null
}

export default PaintingsDetails
