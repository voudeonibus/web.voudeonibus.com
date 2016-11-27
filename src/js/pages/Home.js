import React, { Component } from 'react'

import noWifi from '../../img/icon-nowifi.gif'
import support from '../../img/LogoCanarinho.jpg'

const Home = () => {
  return (
    <div className='vdb-home'>
      <div className='vdb-home_wrap'>
        <h1 className='vdb-home_title'>Horários de ônibus de Jaraguá do Sul e região.</h1>
        <div className='vdb-home_p'>
          <img src={noWifi} />
          <p>Não depende de internet.</p>
        </div>
        <div className='vdb-home_social'>
          <p>Contribua:</p>
          <iframe src='https://ghbtns.com/github-btn.html?user=voudeonibus&repo=web.voudeonibus.com&type=star&count=true' frameBorder='0' scrolling='0' width='170px' height='20px'></iframe>
          <iframe className='star' src='https://ghbtns.com/github-btn.html?user=voudeonibus&repo=web.voudeonibus.com&type=fork&count=false' frameBorder='0' scrolling='0' width='170px' height='20px'></iframe>
        </div>
      </div>
      <div className='vdb-home_support'>
        <p>Apoio:</p>
        <img src={support} />
      </div>
    </div>
  )
}

export default Home
