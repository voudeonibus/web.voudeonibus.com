import React, { Component } from 'react'

export default class LineTable extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h3 className='vdb-headsign'>Via Weg I - Terminal - Grubba - Theilacker</h3>

        <table className='vdb-table-line'>
          <tbody>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
