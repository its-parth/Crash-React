import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Footer = () => {
   const {setCurrPage , currPage, totalPages} = useContext(AppContext);
  return (
    <div className='inset-shadow-sm w-screen flex justify-center items-center fixed bottom-0 border-t h-15 font-semibold bg-white'>
        <div className='w-162.5 flex justify-between'>
            <div className='flex gap-2'>
                { 
                    currPage > 1 && <button onClick={() => setCurrPage(prev => prev-1)} className='cursor-pointer border-2 rounded-md border-gray-400 px-3 py-1'>Prev</button>
                }
                {
                    currPage != totalPages && <button onClick={() => setCurrPage(prev => prev+1)} className='cursor-pointer border-2 rounded-md border-gray-400 px-3 py-1'>Next</button>
                }
            </div>
            <div>Page {currPage} of {totalPages}</div>
        </div>
    </div>
  )
}

export default Footer;