import React, { Component } from 'react'
import Main from './Main'

class Favourites extends Component {
  render() {
    const symbol = "\u2718"
    return(
      <div className='favourites'>
        <h1>Favourites</h1>
        <Main symbol={ symbol } />
      </div>
    )
  }
}

export default Favourites
