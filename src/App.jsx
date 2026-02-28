import { useState, useEffect, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Events from './components/Events'
const Events = lazy(() => import("./components/Events"));
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Nav } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import EventDetails from "./components/EventDetails";
import Pokemon from "./components/Pokemon";

function Button() {
    return <button>Click Here</button>;
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count has been updated:", count);
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function App() {
    const name = "4TWIN1";
    return (
        <BrowserRouter>
            <NavigationBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:name" element={<EventDetails />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
