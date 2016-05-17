import React, { Component } from 'react'

export default class LineTable extends Component {
  constructor (props) {
    super(props)
  }

  getHoursStruct () {
    if (!this.props.departure) {
      return []
    }

    let hours = [[]]

    for (let i = 0, _len = this.props.departure.hours.length; i < _len; i++) {
      if (i % 5 === 0) {
        hours.push([])
      }

      hours[hours.length - 1].push(this.props.departure.hours[i])
    }

    return hours
  }

  render () {
    return (
      <div>
        <h3 className='vdb-headsign'>{this.props.variations.join(' - ')}</h3>

        <table className='vdb-table-line'>
          <tbody>
            {this.getHoursStruct().map(lineHours => {
              return (
                <tr>
                  {lineHours.map(hour => (<td>{hour}</td>))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
