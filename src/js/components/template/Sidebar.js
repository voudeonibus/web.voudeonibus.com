import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import { Link } from 'react-router'

const MenuItemLines = (props) => {
  let liClass = classNames({
    'vdb-line-list_item': true,
    'vdb-favorite': false,
    'vdb-line-active': props.active
  })

  return (
    <li className={liClass}>
      <Link to={`/l/${props.content.lineNumber}`} onClick={props.onClick}>
        <span className='number'><span>{props.content.lineNumber}</span></span>
        {props.content.lineName}
      </Link>
    </li>
  )
}

MenuItemLines.PropTypes = {
  lineNumber: PropTypes.Number,
  onClick: PropTypes.function,
  lineName: PropTypes.string
}



export default class LineList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      searchQ: this.props.searchQ,
      selectedIndex: false
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.searchQ !== this.state.searchQ) {
      const { onClick } = this.props
      onClick && onClick(nextState.searchQ)
    }
  }

  setSearch (query) {
    this.setState({
      searchQ: query
    })
  }

  handleLines (index) {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    let filterData, contentLines
    let searchString = this.props.searchQ
    if (isNaN(searchString)) {
      filterData = window.api[0].lines.filter(function (l) {
        return _.deburr(l.lineName.toLowerCase()).match(_.deburr(searchString.toLowerCase()))
      })
    } else {
      filterData = window.api[0].lines.filter(function (l) {
        return l.lineNumber.match(searchString)
      })
    }

    // sorter
    filterData = _.sortBy(filterData, (o) => { return _.deburr(o.lineName) })

    if (filterData.length) {
      contentLines = filterData.map((item, index) => {
        return <MenuItemLines content={item}
              key={index}
              onClick={this.handleLines.bind(this, index)}
              active={(() => {
                if (_.isBoolean(this.state.selectedIndex)) {
                  return false
                } else {
                  return this.state.selectedIndex === index
                }
              })()} />
      })
    } else {
      contentLines =
        <div className='not-found'>
          <p className='not-found-p'>Nenhum resultado encontrado <span><span>:</span>(</span></p>
        </div>
    }

    return (
      <ul className='vdb-line-list'>
        {contentLines}
      </ul>
    )
  }
}


LineList.PropTypes = {
  searchQ: PropTypes.string
}
