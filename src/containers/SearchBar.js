import React from 'react'
import { connect } from 'react-redux'
import {
  readQuery,
  getCards
 } from '../actions'
 import styles from '../styles/SearchBar.scss'

let SearchBar = ({ dispatch }) => {
  let input

  return (
    <div className={ styles.searchBar }>
      <form
        onSubmit={e => {
          e.preventDefault()
          // if (!input.value.trim()) {
          //   return
          // }
          dispatch(readQuery(input.value))
          // input.value = ''
          fetch('https://api.punkapi.com/v2/beers/' + input.value)
            .then(resp => resp.json())
            .then(data => data.map(item => ({
                  id: item.id,
                  image: item.image_url,
                  name: item.name,
                  description: item.description,
                  selected: false
                })
              )
            )
            .then(cards => dispatch(getCards(cards)))
            .catch(error => {
                console.log(error)
                console.log('Bad request')
                dispatch(getCards([]))
              }
            )
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
SearchBar = connect()(SearchBar)

export default SearchBar
