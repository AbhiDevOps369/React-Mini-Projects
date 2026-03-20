import { useState,useEffect,useRef } from 'react'
import { useCallback } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [char,setChar] = useState(false)
  const [pass,setPass]= useState("")

  const passRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(char) str+="₹~!@#$%^&*(){}[]\|?"
    if(number) str+="1234567890"

    for(let i=0;i<length;i++){
      let idx=Math.floor(Math.random() * str.length + 1)
      password+=str.charAt(idx)
    }
    setPass(password)
  },[length,number,char,setPass])

  const copyToClip=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(pass)
  },[pass])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,setPass,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md shadow-md mx-auto rounded-lg px-4 text-orange-500 my-8 bg-gray-400'>
            <h1 className='text-white text-center font-bold m-2 '> Password Generator </h1>
            <div className='flex shadow-md rounded-lg mb-4 overflow-hidden'>
              <input 
                type='text'
                placeholder='password'
                value={pass}
                className='outline-none w-full py-2 text-center text-black rounded-lg'
                ref={passRef}
                readOnly
              />
              <button onClick={copyToClip} className='outline-none bg-green-400 rounded-md text-white text-center shadow-md font-bold m-2 p-3'> Copy </button>
            </div> 
            <div className='flex gap-x-4 items-center'>
              <div className='flex items-center gap-x-1 text-sm m-2'>
              <input 
                type='range'
                min={2}
                max={100}
                value={length}
                className='cursor-pointer '
                onChange={(e)=> {setLength(e.target.value)}}
              />
              <label className='text-white'> Length:{length}</label>
            </div>
              <div className='flex gap-x-1 items-center'>
                <input 
                  type='checkbox'
                  value={number}
                  id='numberInput'
                  onChange={()=>{
                    setNumber((prev)=> !prev)
                  }}
                />
              
                <label htmlFor='numberInput' className='text-white'> Number </label>
              </div>
                <div className='flex gap-x-1 items-center'>
                <input 
                  type='checkbox'
                  value={char}
                  id='charInput'
                  onChange={()=>{
                    setChar((prev)=> !prev)
                  }}
                />
                <label htmlFor='charInput'className='text-white'> Character </label>
              </div>
            </div>


      </div>
    </>
  )
}

export default App
