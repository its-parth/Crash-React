import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
 import { useContext, useEffect } from 'react'
import Blogs from './components/Blogs'
import { AppContext } from './context/AppContext'

function App() {
  const {currPage, fetchData} = useContext(AppContext);
  useEffect(() => {
    fetchData(currPage);
  }, [currPage]);
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <main className='flex justify-items-center pt-15 pb-15 min-h-screen'>
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}

export default App
 