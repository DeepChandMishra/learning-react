import { useState } from "react"

function App() {
  let [counter, setcounter] = useState(15)


  function addValue() {
    setcounter((p) => {
      if (p == 20) {
        return (p = p)
      }
      else {
        return (p = p + 1)
      }
    })
  }

  const removeValue = () => {
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react with vite</h1>
      <h2> counter value:{counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
