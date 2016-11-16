import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'

import LineItemHeader from '../components/LineItemHeader'
import LineSelectDays from '../components/LineSelectDays'
import NotFound from '../components/NotFound'
import LineTable from '../components/LineTable'
import { maskLegend } from '../utils/legends'
import Headroom from 'react-headroom'

export default class LineItem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      line: this.getLineCurrent(props),
      day: 1,
      checkeds: []
    }

    this.onSelectDay = this.onSelectDay.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      line: this.getLineCurrent(nextProps),
      checkeds: []
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

    if (!this.state.line) return []

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
      legends.push({
        position: `${_.padStart(i + 1, 2, '0')}`,
        description: maskLegend(item, i)
      })
    })
    return legends
  }

  onClickCheckbox (position) {
    let checkeds = _.clone(this.state.checkeds, true)
    let index = checkeds.indexOf(position)
    debugger
    if (index === -1) checkeds.push(position)
    else checkeds.splice(index, 1)
    this.setState({
      checkeds
    })
  }

  render () {
    let { line, checkeds } = this.state, view
    const ida = this.getDay('ida')
    const volta = this.getDay('volta')
    const legends = this.getLegends(ida.concat(volta))

    if (!line) {
      return <NotFound isPage={false} />
    }

    if (ida.length > 0 || volta.length > 0) {
      view = [
        <div className='vdb-wrap-ani' key={0}>
          <div className='vdb-wrap-table'>
            <div className='vdb-way'>
              <h2 className='vdb-way_title going'><span className='circle'></span>Ida<span className='arrow'></span></h2>
              <LineTable hours={ida} legends={legends} checkeds={checkeds} />
            </div>
            <div className='vdb-way'>
              <h2 className='vdb-way_title back'><span className='arrow'></span>Volta<span className='circle'></span></h2>
              <LineTable hours={volta} legends={legends} checkeds={checkeds}  />
            </div>
          </div>
        </div>,
        <div className='vdb-legends' key={1}>
          <span>Destino:</span>
          {legends.map((legend, i) => {
            return (
              <label key={i}>
                <input type="checkbox" checked={checkeds.indexOf(legend.position) > -1} onClick={this.onClickCheckbox.bind(this, legend.position)}/>
                <strong>{legend.position}: </strong>{legend.description}
              </label>
            )
          })}
        </div>
      ]
    } else {
      view = (
        <div className='vdb-day-empty'>
          <p>Sem horários para este dia :(</p>
        </div>
      )
    }

    return (
      <div id='headRoom' className='vdb-wrap-scroll'>
        <LineItemHeader {...this.context} line={line} />
        <Headroom
          disable={this.context.lineItemTop ? false : true}
          parent={() => document.getElementById('headRoom') }
        >
          <LineSelectDays onSelect={this.onSelectDay} />
        </Headroom>
        {view}
      </div>
    )
  }
}

LineItem.contextTypes = {
  lineItemScroll: PropTypes.number,
  lineItemTop: PropTypes.bool
}
