const initialState = {
  count: 111
}

const reducer = (oldState = initialState, action) => {
  console.log("oldState: ", oldState, "action: ", action)
  switch(action.type){
    case "INCREMENT":
      return {count: oldState.count + action.payload}
    case "DECREMENT":
      return {count: oldState.count - action.payload}
    default:
      return oldState
  }
}

export default reducer
