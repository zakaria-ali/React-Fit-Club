import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Programs() {
    return (
        <div className='programs' id='programs'>
            {/* The Header */}
            <div className="programs-header">
                <span className='stroke-text'>explore our</span>
                <span>programs</span>
                <span className='stroke-text'> to shape you</span>
            </div>

            {/* The Content */}
            <div className="programs-content">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs