import { connect } from 'react-redux'
import { toggleSelect } from '../actions'
import Main from '../components/Main'

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChoice: id => {
      dispatch(toggleSelect(id))
    }
  }
}

const ShowCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default ShowCards
