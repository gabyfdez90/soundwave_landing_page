import React from 'react'
import covers from "../img/covers.jpg"
import "../styles/discover.css"
import BlackBox from './BlackBox'
import micro from "../img/microphone.svg"
import albums from "../img/albums.svg"
import more from "../img/more.svg"

export const NewMusic = () => {
  return (
    <div className='discover-container'>
        <div className='discover-container-left'>
            <h1 className='discover-container__title'>Discover new Music</h1>
            <div className='discover__blackbox-container'>
                <BlackBox icon={micro} text={"Charts"}></BlackBox>
                <BlackBox icon={albums} text={"Albums"}></BlackBox>
                <BlackBox icon={more} text={"More"}></BlackBox>
            </div>  
            <h3 className='discover-container__slogan'>By joining you can benefit by listening to the latest albums released.</h3>
        </div>
        <div className='discover-container-right'>
            <img src={covers} alt="album covers" className='discover-container__img'></img>
        </div>
    </div>
  )
}
