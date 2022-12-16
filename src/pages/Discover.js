import React from 'react'
import Navbar from '../components/Navbar'
import { NewMusic } from '../components/NewMusic'
import Footer from "../components/Footer"
import "../styles/discover.css"


const Discover = () => {
  return (
    <div>
        <Navbar></Navbar>
        <NewMusic></NewMusic>
        <Footer></Footer>
    </div>
    
  )
}

export default Discover