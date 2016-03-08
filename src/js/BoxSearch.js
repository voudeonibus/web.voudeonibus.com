import React, { Component } from 'react'
import { Link } from 'react-router'


export default class BoxSearch extends Component {
    render () {
      return (
        <form className='vdb-search-box'>
          <input type='text' placeholder='Busque por linhas ou por variações' />
        </form>
      )
    }
}
