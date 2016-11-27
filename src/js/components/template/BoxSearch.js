import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ReactGA from 'react-ga'

export default class BoxSearch extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchQ: this.props.searchQ
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.cleanSearch = this.cleanSearch.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.searchQ !== this.state.searchQ) {
      const { onChange } = this.props
      onChange && onChange(nextState.searchQ)
    }
  }

  handleSearch (input, e) {
    let inputVal = input.target.value
    this.setState({
      searchQ: inputVal
    })
    ReactGA.event({
      category: 'handleSearch',
      action: 'keyDown',
      label: inputVal
    })
  }

  cleanSearch (input) {
    this.setState({
      searchQ: ''
    })
  }

  submit (e) {
    e.preventDefault()
  }

  render () {
    let showCleanButton = false
    if (this.props.searchQ.length > 0) {
      showCleanButton = true
    }

    let cleanSearchClass = classNames({
      'clean-search': true,
      'show': showCleanButton
    })

    return (
      <form className='vdb-search-box' onSubmit={this.submit}>
        <input value={this.props.searchQ} onChange={this.handleSearch} type='text' placeholder='Busque pela sua linha' />
        <a href='javascript:void(0)' onClick={this.cleanSearch} className={cleanSearchClass}>×</a>
      </form>
    )
  }
}

BoxSearch.PropTypes = {
  searchQ: PropTypes.string
}
