import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

export default class LineTable extends Component {
  constructor (props) {
    super(props)
  }

  getHoursStruct () {
    let hours = []

    this.props.hours.map(item => {
      item.departure.hours.map(hour => {
        hours.push({
          destin: item.destin,
          origin: item.origin,
          variations: item.variations,
          hour
        })
      })
    })

    return hours.sort((a, b) => {
      if (a.hour > b.hour) return 1
      if (a.hour < b.hour) return -1
      return 0
    })
  }

  render () {

    let struct = this.getHoursStruct()
    
    return (
      <div className='vdb-table-line'>
        {struct.map(lineHours => {
          return (
            <div>{lineHours.hour}</div>
          )
        })}
      </div>
    )
  }
}

LineTable.propTypes = {
  hours: PropTypes.array
}

LineTable.defaultProps = {
  hours: []
}
