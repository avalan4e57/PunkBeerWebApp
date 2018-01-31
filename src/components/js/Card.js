import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    let likeORcross = null
    if (this.props.type == 'home') {
      likeORcross = styles.like
    } else if (this.props.type == 'favourites') {
      likeORcross = styles.cross
    } else {
      console.log('Error: Main element "type" error')
    }

    let isActive = null
    if (this.props.isActive) {
      isActive = styles.active
    }

    return(
      <div className={ styles.card }>
        <div className={ likeORcross }>
          <button className={ isActive }>{ this.props.symbol }</button>
        </div>
        <div className={ styles.image }>
          {/* <img src="https://images.punkapi.com/v2/keg.png" /> */}
          <img src="https://images.punkapi.com/v2/2.png" />
        </div>
        <div className={ styles.description }>
          <h2>Trashy Blonde</h2>
          <p>A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.</p>
        </div>
      </div>
    )
  }
}

export default Card
