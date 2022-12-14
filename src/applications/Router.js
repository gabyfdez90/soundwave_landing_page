import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Discover from '../pages/Discover'
import Join from '../pages/Join'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/discover" element={Discover}></Route>
            <Route path="/join" element={Join}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router