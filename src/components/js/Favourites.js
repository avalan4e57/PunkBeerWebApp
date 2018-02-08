import React, { Component } from 'react'
import Main from './Main'
import styles from './../scss/Favourites.scss'

class Favourites extends Component {
  render() {
    return(
      <div className='favourites'>
        <h1>Favourites</h1>
        <Main
          type='favourites'
          cards={ this.props.cards }
          onChoice={ this.props.onChoice } 
        />
      </div>
    )
  }
}

export default Favourites
