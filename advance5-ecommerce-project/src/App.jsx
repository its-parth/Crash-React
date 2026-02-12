import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CartPage from './Pages/CartPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className='flex flex-col min-h-screen items-center select-none'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home loading={loading} setLoading={setLoading}/>} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      {!loading && <Footer />}
    </div>
  )
}

export default App
