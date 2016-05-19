import React, { Component } from 'react'
import NotFoundImg from '../../img/page-404.jpg'


export default class NotFound extends Component {
  render () {
    return (
      <div className='vdb-page_notfound'>
        <img src={NotFoundImg} />
        <h1>Ops, aconteceu algo de errado!</h1>
        <p><strong>Página não encontrada,</strong> navegue pelas linhas no menu lateral e não perca o horário.</p>
      </div>
    )
  }
}

export default NotFound
