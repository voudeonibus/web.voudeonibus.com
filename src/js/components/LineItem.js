import React, { Component } from 'react'

import LineItemHeader from '../components/LineItemHeader'

export default class LineItem extends Component {


  render () {
    return (
      <div className='vdb-wrap-scroll'>
        <LineItemHeader scroll={this.props.scrollWrap} scrollTop={this.props.scrollPosition} />
        <div className='vdb-wrap-table'></div>
      </div>
    )
  }
}
