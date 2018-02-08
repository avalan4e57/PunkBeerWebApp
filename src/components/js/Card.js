import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    // const blackStar = "\u2605"
    // const whiteStar = "\u2606"
    // const heavyBallotX = "\u2718"
    let likeORcross = null
    let isActive = null
    let symbol = null
    if (this.props.type == 'home') {
      likeORcross = styles.like
      symbol = "\u2606"
      if (this.props.selected == true) {
        isActive = styles.active
        symbol = "\u2605"
      }
    } else if (this.props.type == 'favourites') {
      likeORcross = styles.cross
      symbol = "\u2718"
    } else {
      console.log('Error: Main element "type" error')
    }

    return(
      <div className={ styles.card }>
        <div className={ likeORcross }>
          <button className={ isActive } onClick={ () => this.props.onChoice(this.props.id) }>
            { symbol }
          </button>
        </div>
        <div className={ styles.image }>
          <img src={ this.props.image } />
        </div>
        <div className={ styles.description }>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.description }</p>
        </div>
      </div>
    )
  }
}

export default Card
