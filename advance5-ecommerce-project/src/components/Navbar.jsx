import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import cart from '../assets/cart.png'
const Navbar = () => {
  return (
    <div className='w-full bg-black flex justify-center text-white py-3 px-4'>
        <div className='w-full sm:max-w-11/12 md:max-w-9/12 flex justify-between'>
            <div>
              <NavLink to={'/'}><img className='w-40' src={logo} alt="logo" /></NavLink>
            </div>
            <div className='flex gap-5 items-center font-bold text-lg'>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/cart'}><img className='w-7'  src={cart} /></NavLink> 
            </div>
        </div>
    </div>
  )
}

export default Navbar