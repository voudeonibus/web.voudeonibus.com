import React, { Component, PropTypes } from 'react'
import NotFoundImg from '../../img/page-404.jpg'

const NotFound = (props) => {
  let phrase

  if (props.isPage) {
    phrase = <strong>Página não encontrada,</strong>
  } else {
    phrase = <strong>Linha não encontrada,</strong>
  }

  return (
    <div className='vdb-page_notfound'>
      <img src={NotFoundImg} />
      <h1>Ops, aconteceu algo de errado!</h1>
      <p>{phrase} navegue pelo menu lateral e não perca o horário.</p>
    </div>
  )
}

export default NotFound

NotFound.propTypes = {
  isPage: PropTypes.bool
}

NotFound.defaultProps = {
  isPage: true
}
