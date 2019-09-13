

function onSearch(event) {
  return {type:"CHANGE_SEARCH", payload: event.target.value}
}

function updatePaintingInfo(info){
  return { type: "UPDATE_PAINTING", payload: info }
}

export {onSearch, updatePaintingInfo}
