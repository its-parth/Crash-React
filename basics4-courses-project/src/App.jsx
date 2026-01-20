import React from 'react'
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Courses from './components/Courses';
import { useEffect, useState } from "react";
import { apiUrl, filterData } from './data';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const getAllCourses = (data) => {
    const allCourses = [];
    Object.values(data).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
      allCourses.push(course);
    })
    })
    return allCourses;
  }
  const fetchData = async () => {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.data;
    console.log(data)
    setData(data);
    setFilteredData(getAllCourses(data))
  }
  useEffect(() => {
    fetchData();
  }, []);
  // method for updating the content acording to filter 
  const updateContent = (title) => {
    if (title == 'All') setFilteredData(getAllCourses(data));
    else setFilteredData(data[title]);
  }
  return (
    <div className='main-wrapper w-full min-h-screen bg-gray-600 flex flex-col justify-start items-center text-white'>
      <Header />

      <FilterBar updateContent={updateContent} category={category} setCategory={setCategory}/>

      <Courses courses={filteredData} />
      <ToastContainer />
    </div>
  )
}

export default App;
