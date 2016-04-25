import React, { Component } from 'react'

import LineItemHeader from '../components/LineItemHeader'
import LineItemDays from '../components/LineItemDays'
import Headroom from 'react-headroom'

export default class LineItem extends Component {

  render () {
    return (
      <div id='headRoom' className='vdb-wrap-scroll'>
        <LineItemHeader scroll={this.props.scrollWrap} scrollTop={this.props.scrollPosition} />
        <Headroom
          disable={this.props.scrollPosition ? false : true}
          parent={() =>  document.getElementById('headRoom') }
        >
          {this.props.scrollPosition}
          <LineItemDays />
          }
        </Headroom>

        <div className='vdb-wrap-table'>
        </div>
      </div>
    )
  }
}
