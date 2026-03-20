import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")
  const colors = ["olive", "red", "blue", "green", "black", "purple"]


  return (
    <div className="w-full min-h-screen transition-colors duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex justify-center inset-x-0 px-2 bottom-12">
        <div className="flex flex-wrap bg-white rounded-full py-2 px-4 shadow-xl gap-4 ">
          {colors.map((c)=>(
            <button 
              key={c}
              onClick={()=>setColor(c)}
              className="px-4 py-2 rounded-xl shadow-lg " style={{backgroundColor:c,color:"white"}}>
                {c}
              </button>
          ))}
        </div>
      </div>
    </div>

  )
}

export default App