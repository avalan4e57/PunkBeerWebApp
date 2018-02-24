const inputQuery = (state = '', action) => {
  switch (action.type) {
    case 'READ_QUERY':
      return action.text
    default:
      return state
  }
}

export default inputQuery
