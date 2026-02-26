import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'

function Button() {
  
  return (
    <button >Click Here</button>
  )
}

function Counter() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    console.log("Count has been updated:", count);
}, 
[
  count
]  

)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function App() {

  const name = "4TWIN1";
  return (
    <>
      <Events />
      </>
    
  )
}

export default App
