import React, { Component } from 'react'
import Main from './Main'
import PropTypes from 'prop-types'
import SearchBar from '../containers/SearchBar'
import ShowCards from '../containers/ShowCards'

const Home = () => (
  <div className='home'>
    <SearchBar />
    <ShowCards type='home' />
  </div>
)

// Home.propTypes = {
//   onSearch: PropTypes.func.isRequired,
//   readQuery: PropTypes.func.isRequired,
//   execQuery: PropTypes.func.isRequired,
//   onChoice: PropTypes.func.isRequired,
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       selected: PropTypes.bool.isRequired
//     }).isRequired
//   ).isRequired
// }

export default Home
