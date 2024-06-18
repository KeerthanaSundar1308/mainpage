import { useState } from 'react'
import './App.css'
import Update from './components/Update';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
   const [count, setCount] = useState(0)

  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover"  
    style={{"background":"url('../src/assets/bg1.jpg"}}>
      
      {/* <Header/>
      <Update/> */}
      <Login/>
      
    </div>
  )
}

export default App;
