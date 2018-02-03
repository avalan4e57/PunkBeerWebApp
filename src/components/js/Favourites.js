import React, { Component } from 'react'
import Main from './Main'
import styles from './../scss/Favourites.scss'

class Favourites extends Component {
  render() {
    const symbol = "\u2718"
    return(
      <div className='favourites'>
        <h1>Favourites</h1>
        <Main
          symbol={ symbol }
          type='favourites'
          cards={ this.props.cards }
          onChoice={ this.props.onChoice}
        />
      </div>
    )
  }
}

export default Favourites
