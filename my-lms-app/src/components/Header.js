import React from 'react'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={logo} alt="LMS Logo" style={{width: '100px', height: '100px'}}></img>
            <nav>
                <a href="login.html">Login</a> 
                <a href="leaderboard.html">Leaderboard</a> 
                <a href="#about">About LMS</a>
            </nav>
        </div>
    </div>
  )
}

export default Header