import React from "react";
import {connect} from 'react-redux'
import {onSearch} from '../redux/actionCreators'

//read from store state.searchText
//write to the store state.searchText
const Searchbar = props => {
  return (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.searchText}
        onChange={props.onSearch}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
)};
//return an object
//{props: state in the store}
const mapStateToProps = (state) => ( {searchText: state.searchText} )

//return an object that maps some prop to some dipatching action (function)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearch: (event)=>{ dispatch(  onSearch(event)  ) }
//   }
// }
export default connect(mapStateToProps, {onSearch})(Searchbar);
// export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
