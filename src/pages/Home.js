import React from 'react'
import Cover from '../components/Cover'
import Navbar from '../components/Navbar'
import "../styles/index.css"

export const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Cover></Cover>
    </div>
  )
}

export default Home