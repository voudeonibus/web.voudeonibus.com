import React, { Component } from 'react'
import { Link } from 'react-router'

import VoudeOnibusPng from '../../../img/voudeonibus.png'
import VoudeOnibusHorizontalPng from '../../../img/voudeonibus-horizontal.png'

const imgs = `${VoudeOnibusHorizontalPng} 640w, ${VoudeOnibusPng} 800w`

const Header = () => {
    return (
      <header className='vdb-header'>
        <h1 className='vdb-title'>
          <Link to={`/`}>
            <img alt='Vou de ônibus' srcSet={imgs} />
          </Link>
        </h1>
      </header>
    )
}

export default Header
