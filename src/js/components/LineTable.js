import React, { Component } from 'react'
import _ from 'lodash'

export default class LineTable extends Component {
  constructor (props) {
    super(props)
  }

  getHoursStruct () {
    if (!this.props.hours) {
      return []
    }

    let hours = []

    this.props.hours.map(item => {
      item.departure.hours.map(hour => {
        hours.push(hour)
      })
    })

    return hours
  }

  render () {
    return (
      <div className='vdb-table-line'>
        {this.getHoursStruct().sort().map(lineHours => {
          return (
            <div>{lineHours}</div>
          )
        })}
      </div>
    )
  }
}
