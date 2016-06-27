import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactGA from 'react-ga'

import App from './app'
import dataAPI from './data'
import LineItem from './components/LineItem'
import Home from './components/Home'
import NotFound from './components/NotFound'
import '../styles/main.scss'

window.api = dataAPI
ReactGA.initialize('UA-79995709-1')

const logPageView = () => {
  ReactGA.pageview(window.location.pathname)
}


render((
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/l/:id' component={LineItem} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>),
  document.getElementById('App-root')
)
