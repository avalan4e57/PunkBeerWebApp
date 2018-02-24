import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navigation.scss'

class Navigation extends Component {
  constructor() {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('menu')
      const navToggle = document.getElementById('nav-toggle')
      const isClickedInside = navToggle.contains(event.target)

      if (!isClickedInside) {
        if (menu.className == styles.active) {
          menu.className = ''
        }
      }
    })

    window.addEventListener('resize', this.cancelTransition.bind(this))
  }

  toggleMenu(event) {
    event.preventDefault()
    const menu = document.getElementById('menu')
    menu.className = menu.className !== styles.active ? styles.active : ''
  }

  cancelTransition() {
    const menu = document.getElementById('menu')
    if (menu.className != styles.noTransition) {
      menu.className = styles.noTransition
    }
  }

  render() {
    return(
      <div className={ styles.navigation }>
        <nav>
          <div id="nav-toggle" className={ styles.navMobile } onClick={ this.toggleMenu }><a href="#!"><span></span></a></div>
          <ul id="menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favourites'>Favourites</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation
