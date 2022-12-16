import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import '../styles/join.css'

export const Join = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='join-container'>
      <h1 className='join-container__title'>Join the <span className='join__title-fun'>fun.</span></h1>
      <Form></Form>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Join