import React, { Component } from 'react'

export default class BoxSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchQ: this.props.searchQ
    }
  }

  handleSearch(input) {
    let inputVal = input.target.value
    this.setState({
      searchQ: inputVal
    })
  }

  render () {
    return (
      <form className='vdb-search-box'>
        <input value={this.state.searchQ} onChange={this.handleSearch.bind(this)} type='text' placeholder='Busque pela sua linha' />
      </form>
    )
  }
}
