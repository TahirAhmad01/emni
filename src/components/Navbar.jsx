import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/dasboard">dashboard</Link></li>
                <li><Link to="/">home</Link></li>
                <li><Link to="/">home</Link></li>
                <li><Link to="/">home</Link></li>
                <li><Link to="/">home</Link></li>
            </ul>
        </div>
    )
}

export default Navbar