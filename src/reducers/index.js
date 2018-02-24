import { combineReducers } from 'redux'
import inputQuery from './inputQuery'
import cards from './cards'

const todoApp = combineReducers({
  inputQuery,
  cards
})

export default todoApp
