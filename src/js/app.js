import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Header from './components/header'
import BoxSearch from './components/BoxSearch'
import LineList from './components/LineList'

import '../styles/main.scss'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleMenu() {
    this.setState = {
      menuOpen: !this.state.menuOpen
    }
  }
  render () {
    return (
      <section className='container'>

        <div className='vdb-side'>
          <Header />
          <div className={this.state.menuOpen ? 'vdb-menu active' : 'vdb-menu'}>
            <button onClick={this.handleMenu.bind(this)} className='vdb-menu-action'><span>Open menu</span></button>
            <BoxSearch />
            <LineList />
          </div>
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
