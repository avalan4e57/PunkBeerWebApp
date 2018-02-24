import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Card.scss'

const Card = ({ type, onClick, id, image, description, name, selected }) => {
  let likeORcross = null
  let isActive = null
  let symbol = null
  if (type == 'home') {
    likeORcross = styles.like
    symbol = "\u2606"
    if (selected == true) {
      isActive = styles.active
      symbol = "\u2605"
    }
  } else if (type == 'favourites') {
    likeORcross = styles.cross
    symbol = "\u2718"
  } else {
    console.log('Error: Main element "type" error')
  }

  return(
    <div className={ styles.card }>
      <div className={ likeORcross }>
        <button className={ isActive } onClick={ onClick }>
          { symbol }
        </button>
      </div>
      <div className={ styles.image }>
        <img src={ image } />
      </div>
      <div className={ styles.description }>
        <h2>{ name }</h2>
        <p>{ description }</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // onChoice: PropTypes.func.isRequired
}

export default Card
