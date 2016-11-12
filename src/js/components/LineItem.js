import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import LineItemHeader from '../components/LineItemHeader'
import LineSelectDays from '../components/LineSelectDays'
import LineTable from '../components/LineTable'
import Headroom from 'react-headroom'

export default class LineItem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      line: this.getLineCurrent(props),
      day: 1
    }

    this.onSelectDay = this.onSelectDay.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      line: this.getLineCurrent(nextProps)
    })
  }

  getLineCurrent (props) {
    let line = _.filter(window.api[0].lines, {lineNumber: props.params.id})
    if (line.length > 0) {
      return line[0]
    } else {
      false
    }
  }

  getDay (direction) {
    let filterDay = {type: this.state.day}

    return _.filter(this.state.line[direction], trip => {
      return _.filter(trip.departures, filterDay).length > 0
    }).map(trip => {
      return Object.assign({}, trip, {
        departure: _.filter(trip.departures, filterDay)[0]
      })
    })
  }

  onSelectDay ({type}) {
    this.setState({
      day: type
    })
  }

  getLegends (hours) {
    let legends = []
    hours.map((item, i) => {
      legends.push(`${_.padStart(i + 1, 2, '0')}: ${item.origin} / ${item.destin} - ${item.variations.join(' - ')}`)
    })
    return legends
  }

  render () {
    let { line } = this.state
    const ida = this.getDay('ida')
    const volta = this.getDay('volta')
    const legends = this.getLegends(ida.concat(volta))

    return (
      <div id='headRoom' className='vdb-wrap-scroll'>
        <LineItemHeader {...this.context} line={line} />
        <Headroom
          disable={this.context.lineItemTop ? false : true}
          parent={() => document.getElementById('headRoom') }
        >
          <LineSelectDays onSelect={this.onSelectDay} />
        </Headroom>
        <div className='vdb-wrap-table'>
          <div className='vdb-way'>
            <h2 className='vdb-way_title going'><span className='circle'></span>Ida<span className='arrow'></span></h2>
            <LineTable hours={ida} />
          </div>
          <div className='vdb-way'>
            <h2 className='vdb-way_title back'><span className='arrow'></span>Volta<span className='circle'></span></h2>
            <LineTable hours={volta} />
          </div>
        </div>
        <div className='vdb-legends'>
          <span>Destino:</span>
          {legends.map(legend => {
            return <div>{legend}</div>
          })}
        </div>
      </div>
    )
  }
}

LineItem.contextTypes = {
  lineItemScroll: PropTypes.number,
  lineItemTop: PropTypes.bool
}
