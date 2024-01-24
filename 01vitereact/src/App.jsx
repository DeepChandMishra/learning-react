import {  useState } from "react"
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  //currency converter
      
  const [amount,setAmount]= useState(0)
  const [from,setFrom]= useState("usd")
  const [to,setTo] =useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)
   
  const currencyInfo=useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
     setFrom(to)
     setTo(from)
     setConvertedAmount(amount)
     setAmount(convertedAmount)
  }

   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
   }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/19850845/pexels-photo-19850845/free-photo-of-a-city-street-with-cars-and-buildings-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App


//  {

     
                                               //password generator app

//   const [length,setLength]=useState(8)
//   const [num,setNum]=useState(false)
//   const [character,setCharacter] = useState(false)
//   const [password,setPassword]=useState("")
//   const [color, setColor] = useState("blue");
//   //useRef hook

//   const passwordRef= useRef(null)

// const passwordGenerator = useCallback(()=>{
//     let pass=""
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(num) str += "0123456789"
//     if(character) str += "!@#$%^&*(){}[]~`=+"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length +1)
//       pass += str.charAt(char)

//     }

//     setPassword(pass)

// },[length,num,character,setPassword])

//    const copyPassword= useCallback(() =>{
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password)
//    },[password])

//    useEffect(() => {passwordGenerator()},[length,num,character,setPassword])
//   return (
//     <>
//     {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
//       <Card username="himani" btnText="click me" />
//       <Card username="munni" btnText="visit me" /> 

//     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button onClick={()=>{setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
//           <button onClick={()=>{setcolor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
//           <button onClick={()=>{setcolor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
//           <button onClick={()=>{setcolor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
//           <button onClick={()=>{setcolor("yellow")}} className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
//           <button onClick={()=>{setcolor("pink")}} className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "Pink"}}>Pink</button>
//           <button onClick={()=>{setcolor("white")}} className="outline-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "white"}}>White</button>
//         </div>
//       </div>
//     </div> */}

     

//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 ">
//       <h1 className="text-white text-center">Password generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input 
//           type="text"
//           value={password} 
//           className="outline-none w-full py-1 px-3"
//           placeholder="password"
//           readOnly
//           ref={passwordRef}
//           />  

//           <button onMouseEnter={()=>setColor("darkblue")} onMouseLeave={() => setColor("blue")} onClick={copyPassword} className="outline-none  text-white px-3 py-0.5 shrink-0" style={{backgroundColor:color}}>copy</button> 

//       </div>
  
//     <div className="flex test-sm gap-x-2">
//       <div className="flex items-center gap-x-1">
//         <input 
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//         className="cursor-pointer"
//         onChange={(e) =>{setLength(e.target.value)}}
//         />
//         <label>Length:{length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input 
//         type="checkbox" 
//         defaultChecked={num}
//         id="numberInput" 
//         onChange={()=>{setNum((prev)=> !prev)}}
//         />
//         <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input 
//         type="checkbox" 
//         defaultChecked={character}
//         id="characterInput" 
//         onChange={()=>{setCharacter((prev)=> !prev)}}
//         />
//         <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
//     </div>
      
//     </>
//   )
// }


