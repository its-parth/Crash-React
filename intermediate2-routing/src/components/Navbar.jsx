import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/support'}>Support</NavLink>
                </li>
                <li>
                    <NavLink to={'/labs'}>Labs</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar