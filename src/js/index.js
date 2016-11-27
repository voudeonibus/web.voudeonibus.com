import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactGA from 'react-ga'

import dataAPI from './data'
import '../styles/main.scss'

import App from './app'
import Lines from './pages/Lines'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

window.api = dataAPI
ReactGA.initialize('UA-79995709-1')

const logPageView = () => {
  ReactGA.pageview(window.location.pathname)
}


render((
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/l/:id' component={Lines} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>),
  document.getElementById('App-root')
)
