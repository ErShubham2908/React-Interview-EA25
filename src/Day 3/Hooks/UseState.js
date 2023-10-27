import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(1)
   return (
    <div>
        <h2>Multiply : {count}</h2>
        <button onClick={() => setCount(count * 2)} >Multiply</button>
    </div>
  )
}

export default UseState