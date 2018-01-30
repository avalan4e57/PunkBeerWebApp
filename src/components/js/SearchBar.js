import React, { Component } from 'react'
import styles from './../scss/SearchBar.scss'

class SearchBar extends Component {
  render() {
    return(
      <div className={ styles.searchBar }>
        <input type='text' />
        <button>Search</button>
      </div>
    )
  }
}

export default SearchBar
