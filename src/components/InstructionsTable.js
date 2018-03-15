import React from 'react'
import styles from '../styles/InstructionsTable.scss'

const InstructionsTable = () => (
  <div className={ styles.instructions }>
    <h2>Instruction:</h2>
    <p>You can visit <a href='https://punkapi.com/documentation/v2'>Punk API docs</a> to learn how to use queries on this web site or just <span className={ styles.attention }>hint 'Search' button with an empty query</span> to see the result of basic request which is like <span>https://api.punkapi.com/v2/beers</span></p>
    <table>
      <thead>
        <tr>
          <th>Param</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abv_gt</td>
          <td>number</td>
          <td>Returns all beers with ABV greater than the supplied number</td>
        </tr>

        <tr>
          <td>abv_lt</td>
          <td>number</td>
          <td>Returns all beers with ABV less than the supplied number</td>
        </tr>

        <tr>
          <td>ibu_gt</td>
          <td>number</td>
          <td>Returns all beers with IBU greater than the supplied number</td>
        </tr>

        <tr>
          <td>ibu_lt</td>
          <td>number</td>
          <td>Returns all beers with IBU less than the supplied number</td>
        </tr>

        <tr>
          <td>ebc_gt</td>
          <td>number</td>
          <td>Returns all beers with EBC greater than the supplied number</td>
        </tr>

        <tr>
          <td>ebc_lt</td>
          <td>number</td>
          <td>Returns all beers with EBC less than the supplied number</td>
        </tr>

        <tr>
          <td>beer_name</td>
          <td>string</td>
          <td>Returns all beers matching the supplied name (this will match partial strings as well so e.g punk will return Punk IPA), if you need to add spaces just add an underscore (_).</td>
        </tr>

        <tr>
          <td>yeast</td>
          <td>string</td>
          <td>Returns all beers matching the supplied yeast name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
        </tr>

        <tr>
          <td>brewed_before</td>
          <td>date</td>
          <td>Returns all beers brewed before this date, the date format is mm-yyyy e.g 10-2011</td>
        </tr>

        <tr>
          <td>brewed_after</td>
          <td>date</td>
          <td>Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011</td>
        </tr>

        <tr>
          <td>hops</td>
          <td>string</td>
          <td>Returns all beers matching the supplied hops name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
        </tr>

        <tr>
          <td>malt</td>
          <td>string</td>
          <td>Returns all beers matching the supplied malt name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
        </tr>

        <tr>
          <td>food</td>
          <td>string</td>
          <td>Returns all beers matching the supplied food string, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
        </tr>

        <tr>
          <td>ids</td>
          <td>string (id|id|...)</td>
          <td>Returns all beers matching the supplied ID's. You can pass in multiple ID's by separating them with a | symbol.</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default InstructionsTable
