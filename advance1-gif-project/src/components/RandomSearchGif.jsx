import React, { useEffect, useState } from 'react'
import Loader from './Loader ';
import useGif from '../hooks/useGif';

const RandomSearchGif = () => {
    const [searchText, setSearchText] = useState('');
    const changeHandler = (event) => {
        setSearchText(event.target.value);
    }
    const {gifURL, isLoadingGif, fetchData} = useGif();
    const generateGifHandler = () => {
        fetchData(searchText);
    }
    return (
        <div className='w-3/6 bg-blue-400 rounded-lg flex flex-col gap-3 items-center my-3 border py-4'>
            <h2 className='uppercase font-bold'>Random Gif</h2>
            <div className="random-gif max-w-4/6 w-full flex justify-center">{
                isLoadingGif ?
                    <div className='max-w-full flex justify-center'><Loader /></div>
                    :
                    <img className='max-w-full' src={gifURL} alt="gif-img" />
            }
            </div>
            <input className='bg-white rounded-lg max-w-lg w-5/6 py-2 px-3 text-center' onChange={changeHandler} type="text" value={searchText} />
            <button onClick={generateGifHandler} className='bg-blue-200 max-w-lg rounded-lg py-2 w-5/6 cursor-pointer'>Generate</button>
        </div>
    )
}

export default RandomSearchGif