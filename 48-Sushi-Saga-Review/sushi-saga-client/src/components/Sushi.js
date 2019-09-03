import React from 'react'

const Sushi = (props) => {
  const {name, img_url, price} = props.sushi  // could access id here

  return (
    <div className="sushi">
      <div className="plate">
        { 
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img 
              src={img_url} 
              width="100%" 
              alt={name}
              onClick={() => props.eatSushi(props.sushi)}
             />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi