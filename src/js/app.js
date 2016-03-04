import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import About from './about'
import Contact from './contact'
import '../styles/main.scss'

export default class App extends Component {
  render () {
    return (
      <section>
        <h1>App</h1>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </section>
    )
  }
}

render((
    <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={App} />
      <Route path='about' componet={About} />
      <Route path='contact' componet={Contact} />
    </Route>
  </Router>),
  document.getElementById('the__root')
)
