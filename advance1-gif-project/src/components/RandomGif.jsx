import React, { useEffect, useState } from 'react'
import Loader from './Loader ';

const RandomGif = () => {
    const [gifURL, setGifURL] = useState('');
    const API_URL = import.meta.env.VITE_GIPHY_BASE_URL;
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const [isLoadingGif, setIsLoadingGif] = useState(true);
    const fetchData = async () => {
        setIsLoadingGif(true);
        const response = await fetch(`${API_URL}${API_KEY}`);
        const data = await response.json();
        const imgUrl = data?.data?.images?.original?.url;
        setGifURL(imgUrl);
        setIsLoadingGif(false);
    }
    const generateGifHandler = () => {
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div className='w-3/6 bg-green-300 rounded-lg flex flex-col gap-3 items-center my-3 border py-4'>
        <h2 className='uppercase font-bold'>A Random Gif</h2>
        <div className="random-gif max-w-4/6 w-full">{
            isLoadingGif ? 
            <div className='max-w-full flex justify-center'><Loader /></div>
            :
            <img className='max-w-full' src={gifURL} alt="gif-img" />
        }
        </div>
        <button onClick={generateGifHandler} className='bg-green-200 max-w-lg rounded-lg py-2 w-5/6 cursor-pointer'>Generate</button>
    </div>
  )
}

export default RandomGif