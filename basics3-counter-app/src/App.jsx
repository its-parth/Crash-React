import './App.css'
import Counter from './components/Counter'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className='wrapper bg-gray-700 w-screen h-screen flex justify-center items-center flex-col gap-2'>
      <Counter count={count} setCount={setCount} />
      <button onClick={resetHandler} className='px-4 py-2 bg-sky-500 text-white'>Reset</button>
    </div>
  )
}

export default App
