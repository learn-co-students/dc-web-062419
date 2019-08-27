import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintings from '../data/paintings'

class PaintingsContainer extends Component{

  getFilteredPainting = () => {
    //this.props.searchInput => the searchInput
    //paintings => array of 100 paintings
    //return an array of less than 100 paintings
    return paintings.filter((painting)=>{return painting.title.includes(this.props.searchInput)})
  }

  render(){
    // console.log(paintings)
    return (
      <div>
        {paintings.filter(painting=> painting.title.toLowerCase().includes(this.props.searchInput.toLowerCase()))
          .map(painting =>
          <Painting
            key={painting.id}
            painting={painting}
            changePainting={this.props.changePainting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
