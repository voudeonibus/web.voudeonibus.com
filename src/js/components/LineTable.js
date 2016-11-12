import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { maskLegend } from '../utils/legends'

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
          indexLegend: this.props.legends.filter(l => l.description === maskLegend(item))[0].position,
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
            <div>
              <div>{lineHours.hour}</div>
              <sup>{lineHours.indexLegend}</sup>
            </div>
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
