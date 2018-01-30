import React, { Component } from 'react'
import styles from './../scss/Main.scss'
import Card from './Card'

class Main extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <div className={ styles.gridItem}><Card /></div>
        <div className={ styles.gridItem}><Card /></div>
        <div className={ styles.gridItem}><Card /></div>
        <div className={ styles.gridItem}><Card /></div>
        <div className={ styles.gridItem}><Card /></div>
      </div>
    )
  }
}

export default Main
