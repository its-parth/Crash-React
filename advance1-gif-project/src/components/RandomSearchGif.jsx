import React, { useEffect, useState } from 'react'
import Loader from './Loader ';

const RandomSearchGif = () => {
    const API_URL = import.meta.env.VITE_GIPHY_BASE_URL;
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const [searchText, setSearchText] = useState('');
    const [gifURL, setGifURL] = useState('');
    const changeHandler = (event) => {
        setSearchText(event.target.value);
    }
    const [isLoadingGif, setIsLoadingGif] = useState(true);
    const fetchData = async () => {
        setIsLoadingGif(true);
        const response = await fetch(`${API_URL}${API_KEY}&tag=${searchText}`);
        const data = await response.json();
        const imgUrl = data?.data?.images?.original?.url;
        setGifURL(imgUrl);
        setIsLoadingGif(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    const generateGifHandler = () => {
        fetchData();
    }
    return (
        <div className='w-3/6 bg-blue-400 rounded-lg flex flex-col gap-3 items-center my-3 border py-4'>
            <h2 className='uppercase font-bold'>Random Gif</h2>
            <div className="random-gif max-w-4/6 w-full">{
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