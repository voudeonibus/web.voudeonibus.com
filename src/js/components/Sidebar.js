import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

let listLines = [
  { lineName: "Três Rios", lineNumber: "100"  }
  ,{ lineName: "Três Rios", lineNumber: "100"  }
  ,{ lineName: "Três Rios", lineNumber: "100"  }
  ,{ lineName: "Sábado", lineNumber: "100"  }
  ,{ lineName: "Sábado", lineNumber: "100"  }
  ,{ lineName: "Sábado", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
  ,{ lineName: "Domingos e feriados", lineNumber: "100"  }
];


class MenuItemLines extends Component {
  render(){

    let liClass = classNames ({
      'vdb-line-list_item': true,
      'vdb-favorite': false,
      'vdb-line-active': this.props.active
    });

    return (
      <li className={liClass}>
        <a href='javascript:void(0)' onClick={this.props.onClick}>
          <span className='number'><span>{this.props.content.lineNumber}</span></span>
          {this.props.content.lineName}
        </a>
      </li>
    )
  }
}

export default class LineList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0
    }
  }

  handleLines(index) {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    let filterData;
    let searchString = this.props.searchQ;
    if(isNaN(searchString)){
        filterData = listLines.filter(function(l){
          return _.deburr(l.lineName.toLowerCase()).match(_.deburr(searchString.toLowerCase()))
        });
    } else {
        filterData = listLines.filter(function(l){
            return l.lineName.match( searchString );
        });
    }

    return (
      <ul className='vdb-line-list'>
        {filterData.map((item, index) => {
           return <MenuItemLines content={item}
                  key={index}
                  onClick={this.handleLines.bind(this, index)}
                  active={this.state.selectedIndex === index} />
          }
        )}
      </ul>
    )
  }
}
