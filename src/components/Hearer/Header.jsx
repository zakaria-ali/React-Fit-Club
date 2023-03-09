import React, { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
function Header() {
  const isMobile = window.innerWidth <= 768 ? true : false
  const [menuOpened,setMuneOpened] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? "app-scrolled" : "header"}>
      <img src={Logo} alt=""  />
      {menuOpened === false && isMobile === true ? (
        <div style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px",
        }}
        onClick={()=> setMuneOpened(true)}
        >
          <img src={Bars} alt="" style={{width: "1.5rem",height: "1.5rem"}}/>
        </div>
        )
        : (
          <ul>
            <li onClick={()=> setMuneOpened(false)}><a href='#home'>Home</a></li>
            <li onClick={()=> setMuneOpened(false)}><a href='#programs'>Programs</a></li>
            <li onClick={()=> setMuneOpened(false)}><a href='#why-us'>Why us</a></li>
            <li onClick={()=> setMuneOpened(false)}><a href="#plans">Plans</a></li>
            <li onClick={()=> setMuneOpened(false)}><a href='#testimonials'>Testimonials</a></li>
          </ul>
        )}
    </div>
  )
}

export default Header