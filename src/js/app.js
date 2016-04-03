import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Header from './components/header'
import BoxSearch from './components/BoxSearch'
import LineList from './components/LineList'
import LineItem from './components/LineItem'

import '../styles/main.scss'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleMenu () {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render () {
    return (
      <section className='container'>

        <div className='vdb-side'>
          <Header />
          <button onClick={this.handleMenu.bind(this)} className='vdb-menu-open vdb-menu-action'><span>Open menu</span></button>

          <div className={this.state.menuOpen ? 'vdb-menu vdb-menu-active' : 'vdb-menu'}>
            <div className='vdb-menu-wrap'>
              <BoxSearch />
              <LineList />
            </div>
            <button onClick={this.handleMenu.bind(this)} className='vdb-menu-close vdb-menu-action'><span>Close menu</span></button>
          </div>
        </div>

        <div className='vdb-wrap'>
          <div className='vdb-wrap-container'>
            <LineItem />
          </div>
        </div>

      </section>
    )
  }
}
