import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>{count}</p> 
      <button onClick={() => setCount(count + 1)}>+1</button> 
    </div>
  )
}

export default App
