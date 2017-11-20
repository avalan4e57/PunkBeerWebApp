import React from 'react'
import SearchBar from './SearchBar.js'
import QueryResponse from './QueryResponse.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ searchQuery: this.state.query, query: '' })
  }

  render() {
    return(
      <div className="app">
        <SearchBar query={ this.state.query } onSubmit={ this.handleSubmit } onChange={ this.handleChange } />
        <QueryResponse searchQuery={ this.state.searchQuery } />
      </div>
    )
  }
}

export default App
