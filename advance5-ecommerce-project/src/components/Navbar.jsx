import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import cart from '../assets/cart.png'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <div className='w-full bg-black flex justify-center text-white py-3 px-4'>
        <div className='w-full sm:max-w-11/12 md:max-w-9/12 lg:max-w-[min(1180px,75%)] flex justify-between'>
            <div>
              <NavLink to={'/'}><img className='w-40' src={logo} alt="logo" /></NavLink>
            </div>
            <div className='flex gap-5 items-center font-bold text-lg'>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/cart'}>
              <div className='relative'>
                <img className='w-7' src={cart} />
                <div className='text-white text-xs bg-green-600 rounded-full h-5 w-5 flex justify-center items-center absolute -top-1 -right-2 animate-bounce'>{cartItems.length}</div>
              </div>
              </NavLink> 
            </div>
        </div>
    </div>
  )
}

export default Navbar