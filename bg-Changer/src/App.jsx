import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  return (
    <div className="w-screen h-screen duration-200" 
    style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>

        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "green"}}>Green</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "pink"}} onClick={() => setColor("Pink")}>Pink</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "Brown"}} onClick={() => setColor("brown")}>Brown</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "Purple"}} onClick={() => setColor("purple")}>Purple</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "Orange"}} onClick={() => setColor("orange")}>Orange</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "silver"}} onClick={() => setColor("silver")}>Silver</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>

        <button className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor: "gold"}} onClick={() => setColor("gold")}>Gold</button>
      </div>
    </div>
</div>
  )
}

export default App
