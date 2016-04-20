import React, { Component } from 'react'

import HeaderPlaceholder from '../../pics/header-placeholder.png'

export default class LineItemHeader extends Component {
  render () {
    return (
      <div className='vdb-line-item-header_container'>
        <div  className={this.props.scrollTop ? 'vdb-line-item-header is-top' : 'vdb-line-item-header'} style={{backgroundImage: 'url('+HeaderPlaceholder+')'}}>
          <div className='vdb-line-item-header_scroll' style={{opacity: this.props.scroll/100}}></div>
          <div className='vdb-line-item-header_infos'>
            <h3 className='name'>
              <span className='number'><span>200</span></span>
              Boa vista
            </h3>
            <p className='price'>R$ 3,40</p>
          </div>
        </div>
      </div>
    )
  }
}
