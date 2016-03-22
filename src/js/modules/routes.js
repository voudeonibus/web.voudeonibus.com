import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from '../app.js'
import Home from '../components/home'
import About from '../components/about'
import Lines from '../components/lines'
import NoMatch from '../components/nomatch'

export default (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path ='/lines' component={Lines} />
      <Route path='*' status={404} component={NoMatch} />
    </Route>
  </Route>
)
