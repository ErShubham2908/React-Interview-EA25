import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <>
        <h2>Count Value : {count}</h2>
        <button onClick={() => setCount(count + 1)} >Increment</button>
    </>
  )
}

export default Counter
