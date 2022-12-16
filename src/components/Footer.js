import React from 'react'
import twitter from "../img/twitter.svg"
import facebook from "../img/facebook.svg"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer__left-side'>
        <p>About Us</p>
        <p>Contact</p>
        </div>
        <div className='footer__right-side'>
            <div className='footer__right-side__twitter'>
                <img src={twitter} alt="twitter logo"></img>
                <p>Twitter</p>
            </div>
            <div className='footer__right-side__facebook'>
                <img src={facebook} alt="facebook logo"></img>
                <p>Facebook</p>
            </div>
        </div>
    </div>
  )
}

export default Footer