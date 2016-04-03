import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import '../styles/main.scss'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={App} />
    </Route>
  </Router>),
  document.getElementById('the__root')
)
