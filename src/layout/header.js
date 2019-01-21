import React from 'react'
import { Link } from 'gatsby'

const Header = ({ logoUrl }) => (
  <div className="header">
    <header>
      <a href="/">
        <img src={logoUrl} alt="logo" />
      </a>
    </header>
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">START HERE!</Link>
        </li>
        <li>
          <Link to="/categories/lifestyle">LIFESTYLE</Link>
        </li>
        <li>
          <Link to="/categories/wellness">WELLNESS</Link>
        </li>
        <li>
          <Link to="/categories/career">CAREER</Link>
        </li>
        <li>
          <Link to="/categories/empowerment">EMPOWERMENT</Link>
        </li>
        <li>
          <Link to="/categories/places">PLACES</Link>
        </li>
        <li>
          <Link to="/categories/opinion">OPINION</Link>
        </li>
        <li>
          <Link to="/archive">ARCHIVE</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
