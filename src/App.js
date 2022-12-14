import React from 'react'
import "./styles/index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Join from './pages/Join';
import Home from './pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/discover" element={<Discover/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App