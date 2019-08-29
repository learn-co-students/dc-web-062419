import React from 'react'

const Filters = (props) => {
  return(
    <div>
      <div>
        <label>Sort: </label>
        <select onChange={props.onChangeSort}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div>
        <input type="checkbox"
          checked={props.settings.ascending}
          onChange={props.onChangeAscend}
        />Ascending
      </div>
      <div>
      <label>Filter </label>
      <select onChange={props.onChangeGreased}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="matte">Matte</option>
      </select>
      </div>
    </div>
  )
}

export default Filters
