import React, { Component } from 'react'

import VoudeOnibusPng from '../../img/voudeonibus.png'
import VoudeOnibusHorizontalPng from '../../img/voudeonibus-horizontal.png'

export default class About extends Component {
    render () {
      return (
        <header className='vdb-header'>
          <h1 className='vdb-title'>
            <picture>
              <source srcSet={VoudeOnibusHorizontalPng} media='(max-width: 640px)' />
              <source srcSet={VoudeOnibusPng} />
              <img src={VoudeOnibusPng} alt='Vou de ônibus' />
            </picture>
          </h1>

        </header>
      )
    }
}
