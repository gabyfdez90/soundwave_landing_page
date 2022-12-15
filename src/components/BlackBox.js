import React from 'react'

function BlackBox({icon, text}) {
  return (
    <div className='discover__black-box'>
        <img src={icon} alt="icon" className='discover__black-box__icon'></img>
        <span className='discover__black-box__text'>{text}</span>
    </div>
  )
}
export default BlackBox
