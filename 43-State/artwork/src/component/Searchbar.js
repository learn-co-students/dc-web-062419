import React from 'react'

const Searchbar = (props) => {
  // console.log(props)
  return (
    <input value={props.searchInput} onChange={props.changeSearchInput}/>
  )
}

export default Searchbar
