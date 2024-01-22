import { useState } from "react"
import './index.css'
import Card from "./components/Card"

function App() {
  const [counter, setcounter] = useState(15)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="himani" btnText="click me" />
      <Card username="munni" btnText="visit me" />
    </>
  )
}

export default App
