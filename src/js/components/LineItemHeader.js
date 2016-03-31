import React, { Component } from 'react'

import HeaderPlaceholder from '../../pics/header-placeholder.png'

export default class LineItemHeader extends Component {
  render () {
    return (
      <div className='vdb-line-item-header' style={{backgroundImage: `url('${HeaderPlaceholder}')`}}>
        <div className='vdb-line-item-header_infos'>
          <h3 className='name'>
            <span className='number'><span>200</span></span>
            Boa vista
          </h3>
          <p className='price'>R$ 3,40</p>
        </div>
      </div>
    )
  }
}
