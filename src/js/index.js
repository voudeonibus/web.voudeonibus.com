import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import LineItem from './components/LineItem'
import LineClean from './components/LineClean'
import '../styles/main.scss'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LineClean} />
      <Route path='linha' component={LineItem} />
    </Route>
  </Router>),
  document.getElementById('the__root')
)
