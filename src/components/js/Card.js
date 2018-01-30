import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    return(
      <div className={ styles.card }>
        <div className={ styles.like }>
          <button>&#9734;</button>
        </div>
        <div className={ styles.image }>
          <img src="https://images.punkapi.com/v2/keg.png" />
        </div>
        <div className={ styles.description }>
          <h2>Buzz</h2>
          <p>A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</p>
        </div>
      </div>
    )
  }
}

export default Card
