
import './App.css'
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/userContextProvider';

function App() {

  return (
    <UserContextProvider>
       <h1>React With Shanu</h1>
       <Login />
       <Profile />
    </UserContextProvider>
  )
}

export default App;
