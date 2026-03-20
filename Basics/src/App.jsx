import { useState } from 'react'

function App() {
  let counter=10

  let [count, setCount] = useState(10)
  const addValue= ()=>{

    setCount(count+1)
  }

  const redValue = ()=>{
    setCount(count-1)
  }
  return (
    <>
      <h1> chai aur code</h1>
      <h2> Count value : {count} </h2>
      <button onClick={addValue}> Increase {count}  </button>
      <button onClick={redValue}> Decrease{count}  </button>
    </>
  )
}

export default App
