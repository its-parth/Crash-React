import './App.css'
import Cards from './components/Cards'
import data from './data'
function App() {
  return (
    <div className='wrapper flex flex-col items-center gap-3 mt-3 h-screen'>
      <h2 className='text-2xl font-extrabold border-dashed border-2 inline-block p-3 rounded-xl'>Plan With Parth</h2>
      <Cards data={data}/>
    </div>
  )
}

export default App
