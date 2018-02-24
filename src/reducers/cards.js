const cards = (state = [], action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return action.cards
    case 'TOGGLE_SELECT':
      return state.map(card =>
        (card.id === action.id)
          ? { ...card, selected: !card.selected }
          : card
      )
    default:
      return state
  }
}

export default cards
