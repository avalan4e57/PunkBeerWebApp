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

export default Home
