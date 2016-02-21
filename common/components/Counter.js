// JUST A REDUX EXAMPLE!!
// I'LL CHANGE THIS VERY SOON!

import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render () {
    const { increment, incrementIfOdd, incremetAsync, decrement, counter } = this.props
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incremetAsync()}>Increment async</button>
      </p>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incremetAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
