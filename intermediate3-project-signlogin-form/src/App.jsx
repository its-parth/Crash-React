import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { Bounce, ToastContainer } from 'react-toastify'
import { useState } from 'react'
function App() {
const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='flex flex-col items-center bg-(--richblack-900) min-h-screen'>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}></Navbar>
      <div className='flex flex-1 w-full'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login setIsLogin={setIsLogin}/>}></Route>
          <Route path='/signup' element={<SignUp setIsLogin={setIsLogin}/>}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
