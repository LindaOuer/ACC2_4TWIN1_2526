import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Nav } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar'
import EventDetails from './components/EventDetails'

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
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:name" element={<EventDetails />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
