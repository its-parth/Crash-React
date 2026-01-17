import React, { useState } from 'react'
import Products from './components/Products'
import ProductForm from './components/ProductForm'

const App = () => {
  const products = [
    {
      id: 1,
      title: "Nirma",
      date: new Date(2026, 0, 20),
    },
    {
      id: 2,
      title: "Airel",
      date: new Date(2021, 2, 2),
    },
    {
      id: 3,
      title: "Surf Excel",
      date: new Date(2022, 4, 19),
    },
    {
      id: 4,
      title: "Tide",
      date: new Date(2020, 4, 15),
    },

  ]
  const [productsList, setProductsList] = useState(products);
  console.log(productsList);
  return (
    <div className='flex justify-center items-center w-full h-screen flex-col'>
      <ProductForm productsList={productsList} setProductsList= {setProductsList}/>
      <Products products={productsList}/>
    </div>
  )
}

export default App;
