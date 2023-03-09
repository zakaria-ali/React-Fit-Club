import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
function Join() {
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_eaeaxvb', 'template_2fvkq3k', formRef.current, 'gE5QNjK46bAHVHRpy')
        e.target.reset()
    };
    return (
        <div className='join' id='join-us'>
            <div className="left-join">
                <hr />
                <div>
                    <span className='stroke-text'> ready to</span> level up <br />
                    your body <span className='stroke-text'>with us?</span>
                </div>
            </div>
            <div className="right-join">
                <form ref={formRef}  className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter Your Email Here' />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join