import React from 'react'

const Card = ({ image, name, description }) => {
  // console.log({img})
  return (
    <li>
      <img src={ image } />
      <h4>{ name }</h4>
      <p>{ description }</p>
    </li>
  )
}

export default Card
