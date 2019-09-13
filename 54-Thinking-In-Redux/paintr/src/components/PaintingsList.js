import React from "react";
import PaintingListItem from "./PaintingListItem";
import {connect} from 'react-redux'

const PaintingsList = props => {
  return (
    <div className="ui container">
      <div className="ui celled selection list">
        {props.paintings.map(painting => (
          <PaintingListItem
            key={painting.id}
            painting={painting}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (storeState) => {
  return {
    paintings: storeState.paintings.filter(
      p =>
        p.title.toLowerCase().includes(storeState.searchText.toLowerCase()) ||
        p.artist.name
          .toLowerCase()
          .includes(storeState.searchText.toLowerCase())
    )
  }
}
export default connect(mapStateToProps)(PaintingsList);
