// var react = require('react');
// var ReactDOM = require('reactDOM');
//
// var Hello = react.createClass({
//   render: function () {
//     return (
//       <div>Hello</div>
//     )
//   }
// });
//
// ReactDOM.render(<Hello />, foo);

import react, { Component } from 'react' // var react = require('react');
import { render } from 'react-dom'

class Hello extends Component {
  render () {
    return (
      <div>Foo</div>
    )
  }
}

render(<Hello />, foo)
