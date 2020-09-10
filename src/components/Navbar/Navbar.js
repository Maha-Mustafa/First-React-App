import React from 'react'
import logo from '../../logo1.png';
export default function Navbar() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="logo-img">
            <img src={logo} alt="logoimage" />
          </a>
          <ul className="main-nav">
            <li>
              <a href="/" className="nav-links active">
                Home
            </a>
            </li>
            <li>
              <a href="/" className="nav-links">
                About
            </a>
            </li>
            <li>
              <a href="/" className="nav-links">
                Blog
            </a>
            </li>
          </ul>
        </nav>
      </div>
    )
}
