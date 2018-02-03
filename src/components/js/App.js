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
        // {
        //   id: 1,
        //   name: 'Buzz1',
        //   image: 'https://images.punkapi.com/v2/2.png',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
        //   selected: false
        // },
        // {
        //   id: 2,
        //   name: 'Buzz2',
        //   image: 'https://images.punkapi.com/v2/2.png',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
        //   selected: false
        // },
        // {
        //   id: 3,
        //   name: 'Buzz3',
        //   image: 'https://images.punkapi.com/v2/2.png',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
        //   selected: false
        // },
        // {
        //   id: 4,
        //   name: 'Buzz4',
        //   image: 'https://images.punkapi.com/v2/2.png',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
        //   selected: false
        // },
        // {
        //   id: 5,
        //   name: 'Buzz5',
        //   image: 'https://images.punkapi.com/v2/2.png',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptates tenetur odit fugit, quos laboriosam facilis velit eos commodi omnis pariatur nesciunt ipsa perspiciatis vitae doloremque odio! Error, asperiores unde!',
        //   selected: false
        // }
      ],
      queryInput: '',
      searchQuery: ''
    }

    this.toggleSelect = this.toggleSelect.bind(this)
    this.execQuery = this.execQuery.bind(this)
    this.readQuery = this.readQuery.bind(this)
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers/')
      .then(resp => resp.json())
      .then(data => {
        let cards = data.map(item => ({
            id: item.id,
            image: item.image_url,
            name: item.name,
            description: item.description,
            selected: false
          })
        )
        this.setState({ cards: cards })
      })
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

  execQuery() {
    console.log(this.state.queryInput)
    fetch('https://api.punkapi.com/v2/beers/' + this.state.queryInput)
      .then(resp => resp.json())
      .then(data => {
        let cards = data.map(item => ({
            id: item.id,
            image: item.image_url,
            name: item.name,
            description: item.description,
            selected: false
          })
        )
        this.setState({ cards: cards })
      })
  }

  readQuery(e) {
    this.setState({ queryInput: e.target.value })
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
              onSearch={ this.execQuery }
              readQuery={ this.readQuery }
              execQuery={ this.execQuery }
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
