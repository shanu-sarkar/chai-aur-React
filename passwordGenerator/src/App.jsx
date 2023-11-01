import { useState,useCallback, useEffect, useRef } from "react"
function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYX abcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+=[]{}`~-"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-400 bg-gray-700 font-bold">

        <h1 className="text-white text-center my-1 mb-3">Password generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
             type="text"
             value={password}
             className="outline-none w-full py-1 px-3"
             placeholder="password"
             readOnly
             ref={passwordRef}
              />

               <button 
               onClick={copyPasswordToClipbord}
               className="outline-nome bg-blue-700 text-white px-2 py-0.9 shrink-0 hover:bg-red-500">
               Copy
               </button> 
          </div>
            {/* Range in Html */}
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">

                <input 
                type="range" 
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {setLength(e.target.value)}}
                />

                  <label htmlFor="">Length: {length}</label>
              </div>

                <div className="flex items-center gap-x-1">
                    <input 
                    type="checkbox" 
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={() => {
                    setNumberAllowed((prev) => !prev)
                    }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input 
                    type="checkbox" 
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={() => {
                    setCharAllowed((prev) => !prev)
                    }}
                    />
                    <label htmlFor="numberInput">Charactors</label>
                </div>

            </div>
        </div>
    </>
  )
}

export default App
