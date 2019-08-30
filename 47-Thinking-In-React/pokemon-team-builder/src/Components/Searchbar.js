import React from 'react'

const Searchbar = (props) => {
  return (
    <input onChange={props.onChangeSearch} className="search" />
  )
}

export default Searchbar
