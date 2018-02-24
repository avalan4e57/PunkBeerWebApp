export const readQuery = text => {
  return {
    type: 'READ_QUERY',
    text
  }
}

export const getCards = cards => {
  return {
    type: 'GET_CARDS',
    cards
  }
}

export const toggleSelect = id => {
  return {
    type: 'TOGGLE_SELECT',
    id
  }
}
