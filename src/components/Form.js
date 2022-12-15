import React from 'react'
import Input from '../components/Input'

const Form = () => {
  return (
    <div className='join__form-container'>
        <Input type={"text"} label={"Name: "}> </Input>
        <Input type={"email"} label={"Email: "}> </Input>
        <Input type={"password"} label={"Password: "}> </Input>
        <button className='join__button'>Join Now</button>
    </div>
  )
}

export default Form
