import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = function () {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-3">
        <Link className="navbar-brand" to="/">Movies App</Link>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar
