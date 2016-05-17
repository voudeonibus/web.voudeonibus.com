import React, { Component } from 'react'

let menuItems = [
  { menuItem: 'Dias úteis', type: 1 },
  { menuItem: 'Sábado' , type: 2 },
  { menuItem: 'Domingos e feriados', type: 3 }
]

class MenuItemDays extends Component {
   render () {
     return (
        <a href='javascript:void(0);' className={this.props.active ? 'day-selected' : ''} onClick={this.props.onClick}>{this.props.label}</a>
     )
   }
}

export default class LineSelectDays extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0
    }
  }

  handleDays (index) {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    return (
      <div className='vdb-line-select-days'>
        {menuItems.map((item, index) => {
          return <MenuItemDays label={item.menuItem}
                key={index}
                onClick={this.handleDays.bind(this, index)}
                active={this.state.selectedIndex === index} />
        })}
      </div>
    )
  }
}
