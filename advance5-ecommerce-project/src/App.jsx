import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CartPage from './Pages/CartPage'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='flex flex-col min-h-screen items-center select-none'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
