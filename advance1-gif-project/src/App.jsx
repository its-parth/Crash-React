import './App.css'
import RandomGif from './components/RandomGif'
import RandomSearchGif from './components/RandomSearchGif'

function App() {

  return (
    <div className='outer-container bg-sky-300 min-h-screen flex flex-col w-full items-center p-4 gap-4'>
      <h2 className='uppercase text-xl font-bold bg-white w-full text-center rounded-lg py-2'>Random Gifs</h2>
      <RandomGif />
      <RandomSearchGif />
    </div>
  )
}

export default App
