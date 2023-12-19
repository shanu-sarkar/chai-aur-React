// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//     <header className='App-header'>
//         <h1>Increment + - Decrement</h1>
//         <p>Count is: {count}</p>
//         <div>
//           <button onClick={() => setCount((count) => count + 1)} disabled={count === 100}>Increment</button>
//           <button onClick={() => setCount((count) => count - 1)} disabled={count === 0}>decrement</button>
//         </div>
//           </header>
//     </div>
//   );
// }

// export default App;


// import './App.css'
// import React, {useState} from 'react'

// export default function App() {
//   const [count, setCount] = useState(0)
//     return(
//         <div className="App">
//           <header className="App-header">
//               <h1>Increment + - Decrement</h1>
//               <p>Count is: {count}</p>
//               <div>
//                 <button onClick={() => setCount((count) => count + 1)} disabled={count === 1000}>Increment</button>
//                 <button onClick={() => setCount((count) => count - 1)} disabled={count === 0}>Decrement</button>
//               </div>
//           </header>
//         </div>
          
//     )
// }


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   // State for the counter
//   const [count, setCount] = useState(0);

//   // Function to handle increment
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   // Function to handle decrement
//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Increment/Decrement App</h1>
//         <p>Count: {count}</p>
//         <div>
//           <button onClick={handleIncrement}>Increment</button>
//           <button onClick={handleDecrement} disabled={count === 0}>
//             Decrement
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useState} from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handle = () => {
        setCount (count + 1)
  }
  const handler = () => {
        setCount (count - 1)
  }
  return(
      <div className=" App">
        <header className="App-header">
            <h1>Increment Decrement</h1>
            <p>Count is: {count}</p>
        <div>
          <button onClick={handle}>inc
          </button>
          <button onClick={handler}>inc
          </button>
        </div>
        </header>
      </div>
  )
}

export default App;