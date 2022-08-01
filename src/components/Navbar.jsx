import React from 'react'
import "./NavbarStyle.css"
import {Link } from "react-router-dom"
import {FaBars} from "react-icons/fa" 


const Navbar = () => {
  return (
    <div className='header'>
        <Link to="/">
            <h1>
            GLX TRAVEL
            </h1>
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="Pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/training">Training</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    <div className='hamburger'>
        <FaBars style={{color:"#fff"}}/>
    </div>
    </div>
  )
}

export default Navbar