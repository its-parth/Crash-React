import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Labs from './pages/Labs'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='flex items-center flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/labs' element={<Labs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
