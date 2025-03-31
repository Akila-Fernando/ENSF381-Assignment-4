import React from 'react'
import logo from '../images/logo.jpg'

function Header() {
  return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#004080', color: 'white', padding: '5px' }}>
            <img src={logo} alt="LMS Logo" style={{width: '100px', height: '100px'}}></img>
            <nav style={{ display: 'flex', gap: '20px', marginRight: '20px'}}>
                <a href="/" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >Home</a> 
                <a href="/Courses" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >Courses</a> 
                <a href="/Login" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >Login</a>
            </nav>
        </div>
    </div>
  );
}

export default Header