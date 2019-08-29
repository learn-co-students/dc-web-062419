import React from 'react'

const Details = (props) => {
  return <div className="extra content">
    <div>
      <p>Specialty: {props.specialty}</p>
      <p>Highest Medal Achieved: {props["highest medal achieved"]}</p>
      <p>Weight: {props.weight}</p>
      <p>Greasy? {props.greased.toString()}</p>
    </div>
  </div>
}

export default Details
