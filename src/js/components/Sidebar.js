import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import { Router, Route, Link, browserHistory } from 'react-router'

let listLines = [
  { lineName: "Três Rios", lineNumber: "100"  }
  ,{ lineName: "Três Rios", lineNumber: "100"  }
  ,{ lineName: "Três Rios", lineNumber: "100"  }
  ,{ lineName: "Sábado", lineNumber: "100"  }
  ,{ lineName: "Sábado", lineNumber: "100"  }
  ,{ lineName: "Sábado", lineNumber: "100"  }
  ,{ lineName: "Dômingís e feriados", lineNumber: "999"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Schroeder", lineNumber: "100"  }
  ,{ lineName: "Kohlbach", lineNumber: "100"  }
  ,{ lineName: "Czerniewicz", lineNumber: "100"  }
];

let strangeNames = ["Schroeder","Kohlbach","Czerniewicz","Corticeira","Sei lá","Woznica"]

class MenuItemLines extends Component {
  render(){

    let liClass = classNames ({
      'vdb-line-list_item': true,
      'vdb-favorite': false,
      'vdb-line-active': this.props.active
    });

    var slug = function(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
      var to   = "aaaaaeeeeeiiiiooooouuuunc------";
      for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

      return str;
    };

    return (
      <li className={liClass}>
        <Link to={'/linha'} onClick={this.props.onClick}>
          <span className='number'><span>{this.props.content.lineNumber}</span></span>
          {this.props.content.lineName}
        </Link>
      </li>
    )
  }
}

export default class LineList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      searchQ: this.props.searchQ,
      selectedIndex: 0
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.searchQ !== this.state.searchQ) {
      const { onClick } = this.props
      onClick && onClick(nextState.searchQ)
    }
  }

  setSearch(query) {
    this.setState({
      searchQ: query
    })
  }

  handleLines(index) {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    let filterData, contentLines;
    let searchString = this.props.searchQ;
    if(isNaN(searchString)){
        filterData = listLines.filter(function(l){
          return _.deburr(l.lineName.toLowerCase()).match(_.deburr(searchString.toLowerCase()))
        });
    } else {
        filterData = listLines.filter(function(l){
            return l.lineNumber.match( searchString );
        });
    }

    if(filterData.length) {
      contentLines = filterData.map((item, index) => {
        return <MenuItemLines content={item}
              key={index}
              onClick={this.handleLines.bind(this, index)}
              active={this.state.selectedIndex === index} />
      })
    } else {
      let strangeNamesList = strangeNames.map((name, index) => {
        let ent;
        if(index == strangeNames.length - 2) {
          ent = " ou "
        } else if(index == strangeNames.length - 1) {
          ent = ""
        } else {
          ent = ", "
        }
        return <span><a key={index} className='strange-name' href='javascript:void(0)' onClick={this.setSearch.bind(this, name)}>{name}</a>{ent}</span>
      })
      contentLines =
        <div className='not-found'>
          <p className='not-found-p'>Nenhum resultado encontrado <span><span>:</span>(</span></p>
          <p className='not-found-vqd'>Você quis dizer: {strangeNamesList}?</p>
        </div>
    }

    return (
      <ul className='vdb-line-list'>
        {contentLines}
      </ul>
    )
  }
}
