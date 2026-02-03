import React, { useEffect, useState } from 'react'

const useGif = () => {
    const [gifURL, setGifURL] = useState('');
    const API_URL = import.meta.env.VITE_GIPHY_BASE_URL;
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const [isLoadingGif, setIsLoadingGif] = useState(true);
    const fetchData = async (tag) => {
        setIsLoadingGif(true);
        const url = tag ? `${API_URL}${API_KEY}&tag=${tag}` : `${API_URL}${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const imgUrl = data?.data?.images?.original?.url;
        setGifURL(imgUrl);
        setIsLoadingGif(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return {isLoadingGif, gifURL, fetchData};
}

export default useGif