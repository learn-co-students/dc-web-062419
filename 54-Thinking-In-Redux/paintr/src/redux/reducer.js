import paintingsData from "../paintings.json";
import {combineReducers} from 'redux'

//ONLY going to deal with searchText
const searchTextReducer = (oldState="", action) => { //oldState is just going to be the value of searchText
  switch(action.type){
    case "CHANGE_SEARCH":
      return action.payload
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=paintingsData.paintings, action) => { //oldState is just going to be the value of paintings
  switch(action.type){
    case "UPDATE_PAINTING":
      return oldState.map(p => {
        if(p.id === action.payload.paintingId){
          console.log("found painting")
          return {
            ...p,
            title: action.payload.title,
            artist: {
              ...p.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          }
        }else{
          return p
        }
      })
    default:
      return oldState
  }
}

//obj that is returned needs to {stateKey: reducerFunction}
const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
})
export default rootReducer
