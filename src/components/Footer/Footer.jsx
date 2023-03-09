import React from 'react'
import './Footer.css'
import Githup from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
function Footer() {
    return (
        <div className='footer-container' id='footer'>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
            <hr />
            <div>
                <img src={Githup} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Footer