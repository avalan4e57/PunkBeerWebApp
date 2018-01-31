import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.js'
import Favourites from './Favourites.js'
import Header from './Header'
import Navigation from './Navigation'
import styles from './../scss/App.scss'

class App extends Component {
  render() {
    return(
      <Router>
        <div className='app'>
          <Header />
          <Navigation />

          <Route exact path='/' render={ () => <Home /> } />
          <Route path='/favourites' render={ () => <Favourites /> } />
        </div>
      </Router>
    )
  }
}

export default App
