import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import dataAPI from './data'
import LineItem from './components/LineItem'
import LineClean from './components/LineClean'
import NotFound from './components/NotFound'
import '../styles/main.scss'

window.api = dataAPI

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LineClean} />
      <Route path='/l/:id' component={LineItem} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>),
  document.getElementById('the__root')
)
