import React, { Component } from 'react'
import styles from '../styles/Main.scss'
import Card from './Card'
import PropTypes from 'prop-types'

// const Main = ({ cards, type, onChoice }) => (
//   <div className={ styles.container }>
//     {
//       cards.map((card, index) =>
//         <div className={ styles.gridItem } key={ index }>
//           <Card
//             id={ card.id }
//             name={ card.name }
//             image={ card.image }
//             description={ card.description }
//             selected={ card.selected }
//             onClick={ () => onChoice(card.id) }
//             type={ type }
//           />
//         </div>
//       )
//     }
//   </div>
// )

const Main = ({ cards, type, onChoice }) => {
  if (cards.length === 0) {
    return (
      <div className={ styles.container }>
        <p>You can use <a href='https://punkapi.com/documentation/v2'>Punk API docs</a> to get some custom result or just hint 'Search' button to see the result of baisc request which is like <span>https://api.punkapi.com/v2/beers</span>.</p>
      </div>
    )
  } else {
    // console.log(cards)
    return (
        <div className={ styles.container }>
          {
            cards.map((card, index) =>
              <div className={ styles.gridItem } key={ index }>
                <Card
                  id={ card.id }
                  name={ card.name }
                  image={ card.image }
                  description={ card.description }
                  selected={ card.selected }
                  onClick={ () => onChoice(card.id) }
                  type={ type }
                />
              </div>
            )
          }
        </div>
    )
  }
}

Main.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default Main
