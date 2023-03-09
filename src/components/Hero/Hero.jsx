import React from 'react'
import './Hero.css'
import Header from '../Hearer/Header'
import Hero_img from '../../assets/hero_image.png'
import Hero_img_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {delay, motion} from 'framer-motion'
import NumberCounter  from 'number-counter';

function Hero() {
  const isMoblie = window.innerWidth <= 768 ? true : false
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-side">
        {/* The Header */}
        <Header />

        {/* The Club ADV */}
        <div className="best-ad">
          <motion.div
          initial= {{left: isMoblie? "165px" : "238px"}}
          whileInView= {{left: '8px'}}
          transition= {{type: "tween",duration:3}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* The Hero DES */}
        <div className="hero-des">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and bulid
                  your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        {/* The Figers */}
        <div className="figers">
          <div>
            <span>
            <NumberCounter end={140} start={100} delay='4' preFix="+" />
            </span>
            <span>export coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay='3' preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* The Header Buttons */}
        <div className="hero-btn">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className="right-side">
        <motion.div 
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        transition={{type: "spring",duration:3}}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <button className="btn">Join Now</button>
        <img src={Hero_img} alt="" className='hero-img' />
        <motion.img 
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={{type: "spring",duration:3}}
        src={Hero_img_back} alt="" className='hero-img-back' />
        <motion.div
        initial={{right: "37rem"}}
        whileInView={{right: "28rem"}}
        transition={{type: "spring",duration:3}}
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burend</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
  </div>
  )
}

export default Hero