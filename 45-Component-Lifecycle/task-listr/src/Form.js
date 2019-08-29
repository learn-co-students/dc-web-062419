import React from 'react'

const Form = (props) => {
  return(
    <form onSubmit={props.onSubmitOfForm}>
      <input type="text" onChange={props.onChangeOfForm}/>
      <input type="submit" />
    </form>
  )
}

export default Form
