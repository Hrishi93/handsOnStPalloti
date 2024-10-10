import React, { useState } from 'react'
import './counterStyle.css';

export default function CounterFC() {

    const [count, setCount] = useState(0);
  return (
    <div className='counter-div'>
      <p>Count is {count} </p>
      <button onClick={ () => setCount(count+1)}>+1</button>
      <button onClick={ () => setCount(count-1)}>-1</button>
    </div>
  )
}
