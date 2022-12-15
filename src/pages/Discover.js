import React from 'react'
import Navbar from '../components/Navbar'
import { NewMusic } from '../components/NewMusic'
import "../styles/discover.css"

const Discover = () => {
  return (
    <div>
        <Navbar></Navbar>
        <NewMusic></NewMusic>
    </div>
    
  )
}

export default Discover