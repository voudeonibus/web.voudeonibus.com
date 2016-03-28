import React, { Component } from 'react'

import VoudeOnibusPng from '../../img/voudeonibus.png'
import VoudeOnibusHorizontalPng from '../../img/voudeonibus-horizontal.png'

const imgs = `${VoudeOnibusHorizontalPng} 640w, ${VoudeOnibusPng} 800w`

export default class Header extends Component {
  render () {
    return (
      <header className='vdb-header'>
        <h1 className='vdb-title'>
          <img alt='Vou de ônibus' srcSet={imgs} />
        </h1>
      </header>
    )
  }
}
