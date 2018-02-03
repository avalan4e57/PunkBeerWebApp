import React, { Component } from 'react'
import styles from './../scss/Main.scss'
import Card from './Card'

class Main extends Component {
  render() {
    return(
      <div className={ styles.container }>
        {/* <div className={ styles.gridItem}><Card symbol={ this.props.symbol } type={ this.props.type } isActive={ true } /></div>
        <div className={ styles.gridItem}><Card symbol={ this.props.symbol } type={ this.props.type } /></div>
        <div className={ styles.gridItem}><Card symbol={ this.props.symbol } type={ this.props.type } /></div>
        <div className={ styles.gridItem}><Card symbol={ this.props.symbol } type={ this.props.type } /></div>
        <div className={ styles.gridItem}><Card symbol={ this.props.symbol } type={ this.props.type } /></div> */}
        {
          this.props.cards.map((card, index) =>
            <div className={ styles.gridItem } key={ index }>
              <Card
                symbol={ this.props.symbol }
                type={ this.props.type }
                id={ card.id }
                name={ card.name }
                image={ card.image }
                description={ card.description }
                selected={ card.selected }
                onChoice={ this.props.onChoice }
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default Main
