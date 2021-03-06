import React, { Component, PropTypes } from 'react'

import HeaderPlaceholder from '../../../img/header-placeholder.jpg'

export default class LineItemHeader extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    let scrollOpacity = this.props.lineItemScroll / 100
    let scrollFade = ((this.props.lineItemScroll / 100)-1)*-1

    return (
      <div className='vdb-line-item-header_container'>
        <div className={this.props.lineItemTop ? 'vdb-line-item-header is-top' : 'vdb-line-item-header'} style={{backgroundImage: `url(/images/${this.props.line.lineNumber}.jpg)`}}>
          <div className='vdb-line-item-header_scroll' style={{opacity: scrollOpacity}}></div>
          <div className='vdb-line-item-header_infos'>
            <div className='fade' style={{opacity: scrollFade}}></div>
            <h3 className='name'>
              <span className='number'><span>{this.props.line.lineNumber}</span></span>
              {this.props.line.lineName}
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

LineItemHeader.contextTypes = {
  lineItemScroll: PropTypes.number,
  lineItemTop: PropTypes.bool,
  line: PropTypes.Object
}
