// Counter.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './actions'

function Counter() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
