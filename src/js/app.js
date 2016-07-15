import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import Header from './components/header'
import BoxSearch from './components/BoxSearch'
import Sidebar from './components/Sidebar'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchQ: '',
      menuOpen: false,
      lineItemScroll: 0,
      lineItemTop: false
    }

    this.handleMenu = this.handleMenu.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.onChangeBoxSearch = this.onChangeBoxSearch.bind(this)
  }

  getChildContext () {
    return {
      lineItemScroll: this.state.lineItemScroll,
      lineItemTop: this.state.lineItemTop
    }
  }

  handleMenu () {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleScroll (targetScroll) {
    let thisScroll = targetScroll.target.scrollTop
    let header = 75
    let scrollRatio = (thisScroll * header) / 100

    this.setState({
      lineItemScroll: scrollRatio
    })

    if (scrollRatio > 100) {
      this.setState({
        lineItemTop: true
      })
    } else {
      this.setState({
        lineItemTop: false
      })
    }
  }

  onChangeBoxSearch (value) {
    this.setState({
      searchQ: value
    })
  }

  render () {
    let containerClass = classNames({
      'container': true,
      'is-menu-open': this.state.menuOpen
    })

    return (
      <section className={containerClass}>

        <div className='vdb-side'>
          <Header />
          <button onClick={this.handleMenu} className='vdb-menu-open vdb-menu-action'><span>Open menu</span></button>
          <div className={this.state.menuOpen ? 'vdb-menu vdb-menu-active' : 'vdb-menu'}>
            <div className='vdb-menu-wrap'>
              <BoxSearch searchQ={this.state.searchQ} onChange={this.onChangeBoxSearch} />
              <Sidebar searchQ={this.state.searchQ} onClick={this.onChangeBoxSearch} />
            </div>
            <button onTouchEnd={this.handleMenu} onClick={this.handleMenu} className='vdb-menu-close vdb-menu-action'><span>Close menu</span></button>
          </div>
        </div>

        <div className='vdb-wrap'>
          <div className='vdb-wrap-container' onScroll={_.throttle(this.handleScroll, 1000)}>
            {this.props.children}
          </div>
        </div>

      </section>
    )
  }
}

App.childContextTypes = {
  lineItemScroll: PropTypes.number,
  lineItemTop: PropTypes.bool
}
