import React from 'react'
import './Reasons.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
function Reasons() {
    return (
        <div className='reasons' id='why-us'>
            {/* The Left Side */}
            <div className="reasons-img">
                <img src={img1} alt="" />
                <div className="sub-imgs">
                    <img src={img2} alt="" />
                    <div className="sub-sub-imgs">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    </div>
                </div>
            </div>

            {/* The Right Side */}
            <div className="some-reasons">
                <div>
                    some reasons
                </div>
                <div>
                    <span className='stroke-text'>why </span><span>choose us?</span>
                </div>
                <div className="ticks">
                    <img src={tick} alt="" />
                    <span>over 140+ expert coachs</span>
                </div>
                <div className="ticks">
                    <img src={tick} alt="" />
                    <span>train smarter and faster than before</span>
                </div>
                <div className="ticks">
                    <img src={tick} alt="" />
                    <span>1 free program for new member</span>
                </div>
                <div className="ticks">
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
                <div>
                    our partners
                </div>
                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons