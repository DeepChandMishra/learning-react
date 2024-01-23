import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [length,setLength]=useState(8)
  const [num,setNum]=useState(false)
  const [character,setCharacter] = useState(false)
  const [password,setPassword]=useState("")
  const [color, setColor] = useState("blue");
  //useRef hook

  const passwordRef= useRef(null)

const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(character) str += "!@#$%^&*(){}[]~`=+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)

    }

    setPassword(pass)

},[length,num,character,setPassword])

   const copyPassword= useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
   },[password])

   useEffect(() => {passwordGenerator()},[length,num,character,setPassword])
  return (
    <>
    {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="himani" btnText="click me" />
      <Card username="munni" btnText="visit me" /> 

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>{setcolor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>{setcolor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>{setcolor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=>{setcolor("yellow")}} className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=>{setcolor("pink")}} className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick={()=>{setcolor("white")}} className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "white"}}>White</button>
        </div>
      </div>
    </div> */}

     

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 ">
      <h1 className="text-white text-center">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />  

          <button onMouseEnter={()=>setColor("darkblue")} onMouseLeave={() => setColor("blue")} onClick={copyPassword} className="outline-none  text-white px-3 py-0.5 shrink-0" style={{backgroundColor:color}}>copy</button> 

      </div>
  
    <div className="flex test-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e) =>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox" 
        defaultChecked={num}
        id="numberInput" 
        onChange={()=>{setNum((prev)=> !prev)}}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox" 
        defaultChecked={character}
        id="characterInput" 
        onChange={()=>{setCharacter((prev)=> !prev)}}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>

    </div>
      
    </>
  )
}

export default App
