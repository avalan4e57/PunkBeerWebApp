import React, { Component } from 'react'
import Main from './Main'
import SearchBar from './SearchBar'

class Home extends Component {
  render() {
    const symbol = "\u2606"
    return(
      <div className='home'>
        <SearchBar />
        <Main symbol={ symbol } type='home' />
      </div>
    )
  }
}

export default Home
