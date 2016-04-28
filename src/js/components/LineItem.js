import React, { Component } from 'react'

import LineItemHeader from '../components/LineItemHeader'
import LineSelectDays from '../components/LineSelectDays'
import Headroom from 'react-headroom'


export default class LineItem extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='headRoom' className='vdb-wrap-scroll'>
        <LineItemHeader {...this.props} />
        <Headroom
          disable={this.props.lineItemTop ? false : true}
          parent={() =>  document.getElementById('headRoom') }
        >
          <LineSelectDays />
        </Headroom>
        <div className='vdb-wrap-table'>
        </div>
      </div>
    )
  }
}
