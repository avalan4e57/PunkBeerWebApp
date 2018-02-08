import React, { Component } from 'react'
import Main from './Main'
import SearchBar from './SearchBar'

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <SearchBar onSearch={ this.props.onSearch } readQuery={ this.props.readQuery } execQuery={ this.props.execQuery } />
        <Main
          type='home'
          cards={ this.props.cards }
          onChoice={ this.props.onChoice }
        />
      </div>
    )
  }
}

export default Home
