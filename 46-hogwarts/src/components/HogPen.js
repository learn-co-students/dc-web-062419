import React from 'react'
import Hog from './Hog'
//state hog lives here 
//hogPen would get props

const HogPen = (props) => {
  return(
    <div className="ui cards">
      {
        props.hogsToDisplay.map( hog => {
          return <Hog key={hog.name} {...hog}/>
        })
      }
    </div>
  )
}

export default HogPen;

//<Hog key={hog.name} {...hog}/>
//<Hog key={hog.name} name={hog.name} weight={hog.weight} ... >
