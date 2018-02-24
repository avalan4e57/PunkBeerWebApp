import React from 'react'
import styles from '../styles/Favourites.scss'
import ShowFavourites from '../containers/ShowFavourites'

const Favourites = () => (
  <div>
    <h1>Favourites</h1>
    <ShowFavourites type='favourites' />
  </div>
)

export default Favourites
