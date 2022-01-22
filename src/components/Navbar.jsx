import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/png/cute_si.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <image src={logo} alt="logo"/>
            </div>
            <div>
             <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/dasboard">dashboard</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>   
            </div>
            
        </div>
    )
}

export default Navbar