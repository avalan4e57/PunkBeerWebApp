import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    let likeORcross = null
    let isActive = null
    if (this.props.type == 'home') {
      likeORcross = styles.like
      if (this.props.selected == true) {
        isActive = styles.active
      }
    } else if (this.props.type == 'favourites') {
      likeORcross = styles.cross
    } else {
      console.log('Error: Main element "type" error')
    }

    return(
      <div className={ styles.card }>
        <div className={ likeORcross }>
          <button className={ isActive } onClick={ () => this.props.onChoice(this.props.id) }>
            { this.props.symbol }
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
