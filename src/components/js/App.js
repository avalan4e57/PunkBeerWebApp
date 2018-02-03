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
  constructor() {
    super()
    this.state = {
      cards: [
        {
          id: 1,
          name: 'Buzz1',
          image: 'https://images.punkapi.com/v2/2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
          selected: true
        },
        {
          id: 2,
          name: 'Buzz2',
          image: 'https://images.punkapi.com/v2/2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
          selected: false
        },
        {
          id: 3,
          name: 'Buzz3',
          image: 'https://images.punkapi.com/v2/2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
          selected: true
        },
        {
          id: 4,
          name: 'Buzz4',
          image: 'https://images.punkapi.com/v2/2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
          selected: false
        },
        {
          id: 5,
          name: 'Buzz5',
          image: 'https://images.punkapi.com/v2/2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
          selected: false
        }
      ]
    }

    this.toggleSelect = this.toggleSelect.bind(this)
  }

  toggleSelect(id) {
    this.setState({ cards: this.state.cards.map(card =>
      {
        if (card.id == id) {
          card.selected = !card.selected
        }
        return card
      }
    ) })
  }

  render() {
    const favourites = this.state.cards.filter(card => card.selected == true)
    return(
      <Router>
        <div className='app'>
          <Header />
          <Navigation />

          <Route exact path='/' render={ () =>
            <Home
              cards={ this.state.cards }
              onChoice={ this.toggleSelect }
            /> }
          />
          <Route path='/favourites' render={ () =>
            <Favourites
              cards={ favourites }
              onChoice={ this.toggleSelect }
            /> }
          />
        </div>
      </Router>
    )
  }
}

export default App
