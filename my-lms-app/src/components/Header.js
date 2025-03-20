import React from 'react'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={logo} alt="LMS Logo" style={{width: '100px', height: '100px'}}></img>
            <nav style={{ display: 'flex', gap: '20px', marginRight: '20px'}}>
                <a href="/">Home</a> 
                <a href="/Courses">Courses</a> 
                <a href="/Login">Login</a>
            </nav>
        </div>
    </div>
  )
}

export default Header