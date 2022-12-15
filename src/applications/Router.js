import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Discover from '../pages/Discover'
import Home from '../pages/Home'
import Join from '../pages/Join'

const Router = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/discover" element={<Discover/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
        </Routes>
  )
}

export default Router