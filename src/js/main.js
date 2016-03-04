import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import About from './about'
import '../styles/main.scss'

export default class App extends Component {
  render () {
    return (
      <div>
        <a href='/about'>About</a>
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='about' componet={About} />
    </Route>
  </Router>,
  document.getElementById('the__root')
)
