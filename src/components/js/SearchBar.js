import React, { Component } from 'react'
import styles from './../scss/SearchBar.scss'

class SearchBar extends Component {
  render() {
    return(
      <div className={ styles.searchBar }>
        <input type='text' placeholder='Input search query...' onChange={ this.props.readQuery } />
        <button onClick={ this.props.execQuery }>Search</button>
      </div>
    )
  }
}

export default SearchBar
