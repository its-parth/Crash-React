import React from 'react'
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Courses from './components/Courses';
import { useEffect, useState } from "react";
import { apiUrl } from './data';
const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.data;
    console.log(data)
    setData(data);
    setFilteredData([...data.Business,...data.Design,...data.Development,...data.Lifestyle])
  }
  useEffect(() => {
    fetchData();
  }, []);
// method for updating the content acording to filter 
  const updateContent = (title) => {
    if(title.toLowerCase() == 'all') setFilteredData([...data.Business,...data.Design,...data.Development,...data.Lifestyle]);
    else setFilteredData(data[title]);
  }
  return (
    <div className='main-wrapper w-full min-h-screen bg-gray-600 flex flex-col justify-start items-center text-white'>
      <Header />

      <FilterBar updateContent={updateContent}/>

      <Courses courses={filteredData}/>
    </div>
  )
}

export default App;
