import React from 'react'

const Input = ({label, type}) => {
  return (
    <div className='join__form__input'>
        <p className='join__form__input-label'>{label}</p>
        <input className='join__form__input-box' type={type}></input>
    </div>
  )
}

export default Input