import React, { Component } from 'react'

import BoxSearch from './BoxSearch'
import VoudeOnibusPng from '../../img/voudeonibus.png'

export default class About extends Component {
    render () {
      return (
        <header className='vdb-header'>
          <h1 className='vdb-title'>
            <img src={VoudeOnibusPng} alt='Vou de ônibus' />
          </h1>

          <BoxSearch />
        </header>
      )
    }
}
