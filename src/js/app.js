import React, { Component } from 'react'

import Header from './components/header'
import BoxSearch from './components/BoxSearch'
import LineList from './components/LineList'
import LineItem from './components/LineItem'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      scroll: 0,
      scrollTop: false
    }
  }

  handleMenu () {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleScroll (target) {
      let thisScroll = target.target.scrollTop;
      let endHeader = 75;
      let scrollRatio = (thisScroll*endHeader)/100;

      this.setState({
        scroll: scrollRatio
      })

      if(scrollRatio > 100) {
        this.setState({
          scrollTop: true
        })
      } else {
        this.setState({
          scrollTop: false
        })
      }
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
          <div className='vdb-wrap-container' onScroll={this.handleScroll.bind(this)}>
            <LineItem scrollWrap={this.state.scroll} scrollPosition={this.state.scrollTop} />
          </div>
        </div>

      </section>
    )
  }
}
