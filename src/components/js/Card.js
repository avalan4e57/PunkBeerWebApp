import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    return(
      <div className={ styles.card }>
        <div className={ styles.like }>
          <button>{ this.props.symbol }</button>
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
