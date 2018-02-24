import React from 'react'
import Home from './Home'
import Header from './Header'
import Navigation from './Navigation'
import Favourites from './Favourites'
import styles from '../styles/App.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <Navigation />
      <Route exact path='/' render={ () => <Home /> } />
      <Route path='/favourites' render={ () => <Favourites /> } />
    </div>
  </Router>
)

export default App
