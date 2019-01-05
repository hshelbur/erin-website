import React from 'react'
import { Link } from 'gatsby'

const Header = ({ logoUrl }) => (
  <div className="header">
    <header>
        <a href="/"><img src={logoUrl} alt="logo" /></a>
    </header>
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">START HERE!</Link></li>
        <li><Link to="/lifestyle">LIFESTYLE</Link></li>
        <li><Link to="/wellness">WELLNESS</Link></li>
        <li><Link to="/career">CAREER</Link></li>
        <li><Link to="/empowerment">EMPOWERMENT</Link></li>
        <li><Link to="/beauty">BEAUTY</Link></li>
        <li><Link to="/places">PLACES</Link></li>
        <li><Link to="/opinion">OPINION</Link></li>
        <li><Link to="/archive">ARCHIVE</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header
