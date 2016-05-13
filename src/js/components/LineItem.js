import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import LineItemHeader from '../components/LineItemHeader'
import LineSelectDays from '../components/LineSelectDays'
import LineTable from '../components/LineTable'
import Headroom from 'react-headroom'

export default class LineItem extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='headRoom' className='vdb-wrap-scroll'>
        <LineItemHeader {...this.context} />
        <Headroom
          disable={this.context.lineItemTop ? false : true}
          parent={() => document.getElementById('headRoom') }
        >
          <LineSelectDays />
        </Headroom>
        <div className='vdb-wrap-table'>
          <div className='vdb-way'>
            <h2 className='vdb-way_title going'><span className='circle'></span>Ida<span className='arrow'></span></h2>
            <LineTable />
            <LineTable />
            <LineTable />
            <LineTable />
          </div>
          <div className='vdb-way'>
            <h2 className='vdb-way_title back'><span className='arrow'></span>Volta<span className='circle'></span></h2>
            <LineTable />
            <LineTable />
            <LineTable />
            <LineTable />
          </div>
        </div>
      </div>
    )
  }
}

LineItem.contextTypes = {
  lineItemScroll: PropTypes.number,
  lineItemTop: PropTypes.bool
}
