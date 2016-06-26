import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import dataAPI from './data'
import LineItem from './components/LineItem'
import Home from './components/Home'
import NotFound from './components/NotFound'
import '../styles/main.scss'

window.api = dataAPI

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/l/:id' component={LineItem} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>),
  document.getElementById('App-root')
)
