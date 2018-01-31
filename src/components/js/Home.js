import React, { Component } from 'react'
import Main from './Main'

class Home extends Component {
  render() {
    const symbol = "\u2606"
    return(
      <div className='home'>
        <h1>Home</h1>
        <Main symbol={ symbol } />
      </div>
    )
  }
}

export default Home
