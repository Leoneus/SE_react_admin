import React from 'react'
import './MyBar.css'

function MyBar() {
  return (
    <nav className="app__navbar">
      <div className='logo_top' >
          <img src={("/images/LOGO.png")} width={150}  height={20}></img>
      </div>
      <ul className="app__navbar-links">
        
        <li className="p__opensan"><a href="#info">ข้อมูลการจอง</a></li>
        <li className="p__opensan"><a href="#infobook">ข้อมูลการอนุมัติการจอง</a></li>
        
      </ul>
      <div className="app__navbar-login">
        <a href="#Admin" className="p__opensans">Admin</a>

      </div>
    </nav>
  
  )
}

export default MyBar