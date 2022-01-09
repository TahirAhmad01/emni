import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/profile">home</Link></li>
                <li><Link to="/dasboard">home</Link></li>
                <li><Link to="/">home</Link></li>
            </ul>
        </div>
    )
}

export default Navbar