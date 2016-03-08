import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Header from './components/header'
import LineList from './components/LineList'

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
    </Route>
  </Router>),
  document.getElementById('the__root')
)
