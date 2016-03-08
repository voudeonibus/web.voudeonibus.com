import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import About from './about'
import Contact from './contact'

import Header from './header'
import LineList from './LineList'
import '../styles/main.scss'

export default class App extends Component {
  render () {
    return (
      <section className='container'>

        <div className='vdb-side'>
          <Header />
          <LineList />
        </div>

        <div className='vdb-wrap'>
          <div className='vdb-wrap-container'>
          </div>
        </div>

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
