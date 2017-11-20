import React from 'react'
import Card from './Card.js'

class QueryResponse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.searchQuery !== nextProps.searchQuery) {
      let curQuery = nextProps.searchQuery == 'all' ? '' : nextProps.searchQuery
      fetch('https://api.punkapi.com/v2/beers/' + curQuery)
        .then(resp => resp.json())
        .then(data => {
          this.setState({ cards: data })
        })
    }
  }
  render() {
    let cards = this.state.cards
    return (
      <ul>
         { cards.map(card =>
          <Card
            key={ card.id }
            image={ card.image_url }
            name={ card.name }
            description={ card.description }
          />
        ) }

      </ul>
    )
  }
}

export default QueryResponse
