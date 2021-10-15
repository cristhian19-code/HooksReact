import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="nav-link text-white" to="/">Navbar</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
