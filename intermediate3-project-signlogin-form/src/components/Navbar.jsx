import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
const Navbar = ({isLogin, setIsLogin}) => {
    console.log(isLogin);
  return (
    <div className='bg-(--richblack-900)  text-(--richblack-200) w-11/12 max-w-290 mt-3'>
        <nav className='flex gap-4 justify-between p-3 items-center'>
            <Link to={'/'} className="logo w-40"><img src={logo} alt="logo" /></Link>
            <ul className='flex gap-6'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/'}>About</NavLink></li>
                <li><NavLink to={'/'}>Contact</NavLink></li>
                <li><NavLink to={'/'}>Leaderboard</NavLink></li>
            </ul>
            <div className='flex gap-3'>
                {
                    isLogin ? 
                        (
                            <>
                                <Link onClick={() => setIsLogin(false)} className="login-btn bg-(--richblack-800) py-2 px-5 rounded-lg">Log out</Link>
                                <Link to={'/dashboard'}  className="signup-btn  bg-(--richblack-800) py-2 px-5 rounded-lg">Dashboard</Link>
                            </>
                        )
                    :
                        (
                            <>
                                <Link to={'/login'}  className="login-btn bg-(--richblack-800) py-2 px-5 rounded-lg">Log in</Link>
                                <Link to={'/signup'}  className="signup-btn  bg-(--richblack-800) py-2 px-5 rounded-lg">Sign up</Link>
                            </>
                        )
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar