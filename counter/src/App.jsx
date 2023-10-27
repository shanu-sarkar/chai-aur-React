import { useState } from "react";
import './App.css'
function App() {

  const [count , setCount] = useState(0);

  // let counter = 0;

  const addValue = () => {
    // count = count + 1
    setCount(count + 1);
    // setCount(prevCounter => prevCounter + 1)
    // setCount(prevCounter => prevCounter + 1 )
  };

  // const removeValue = () => {
  //   setCount(count - 1)
  // }

  return(
    <>
        <h1>Chai or react</h1>
        <h2>Counter value : {count}</h2>

        <button onClick={addValue} >Add Value {count}</button>
        <br/>
        <button onClick={() =>setCount (()=>(count - 1))} >Remove value {count }</button>

        <p>Shanu :- {count}</p>
    </>
  );
};

export default App;