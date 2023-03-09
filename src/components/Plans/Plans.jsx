import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

function Plans() {
    return (
        <div className='plans-container' id='plans'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{gap: "2rem"}}>
                <span className='stroke-text'>Ready to start</span>
                <span>Your journey</span>
                <span className='stroke-text'>now withus</span>
            </div>

            {/* The Plans Card */}
            <div className="plans">
                {plansData.map((plan, i)=> (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="featchers">
                            {plan.features.map((featcher, i)=> (
                                <div className="featcher">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{featcher}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>see more benefits -></span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans