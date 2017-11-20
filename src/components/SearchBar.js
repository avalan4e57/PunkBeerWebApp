import React from 'react'

function getQueryRes() {
}

const SearchBar = ({ query, onSubmit, onChange }) => {
  return(
    <div className="search-bar input-group">
      <input type="text" value={ query } onChange={ onChange } name="search-field" placeholder="Search for beer..." className="form-control" />
      <span className="input-group-btn">
        <button type="button" className="btn btn-primary" onClick={ onSubmit }>Search</button>
      </span>
    </div>
  )
}

export default SearchBar
