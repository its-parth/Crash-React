import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl'


export const AppContext = createContext();

function AppContextProvider({children}) {
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchData(page = 1, tag = null, category = null) {
        let url = `${baseUrl}?page=${page}`;
        if(tag) url += `&tag=${tag}`;
        if(category) category += `&category=${category}`;
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setTotalPages(data?.totalPages);
        setPosts(data?.posts);
        setIsLoading(false);
      }
    
      const value = {
        currPage, 
        setCurrPage,
        totalPages, 
        setTotalPages,
        posts,
        setPosts,
        isLoading,
        setIsLoading,
        fetchData,
      }

      return <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
}

export default AppContextProvider;