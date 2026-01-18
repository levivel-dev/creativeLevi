import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/FIN2.png'
import user_icon from '../../assets/user.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I'm a creative and frontend developer based in Uganda with an experience of 10 years working in the organisation of MasterPlus class.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2026 Levi. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
