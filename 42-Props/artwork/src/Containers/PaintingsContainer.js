import React from 'react'
import Card from '../Components/Card'
import data from '../data/paintings'

const PaintingsContainer = (props) => {
  return (
    <div>
      {
        data.map(painting => <Card key={painting.id} paintingObj={painting}/>)
      }
    </div>
  )
}

export default PaintingsContainer

// [
//   <Card />,
//   <Card />,
//   <Card />
// ]
