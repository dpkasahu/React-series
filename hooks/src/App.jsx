import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => (count===0 ? setCount(0) : setCount(count - 1))}>Decrement</button>
      
      
    </>
  )
}

export default App
