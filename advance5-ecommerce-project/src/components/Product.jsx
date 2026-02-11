import React from 'react'
import {products} from '../data'
const Product = ({product}) => {
  return (
    <div className='hover:scale-105 duration-150 shadow-xl/20 hover:shadow-xl/40 rounded-lg inset-shadow-sm/10 hover:inset-shadow-sm/30'>
        <div className='flex flex-col w-70 py-4 px-6 items-center gap-1 justify-between h-full'>
            <h2 className='font-bold text-lg truncate w-45 text-gray-700'>{product.title}</h2>
            <p className='text-center w-45 text-gray-400'>{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            <img className='h-45' src={product.image} alt="product-img" />

            <div className='w-full flex justify-between items-center'>
                <p className='text-green-500 font-bold'>&#36;{product.price}</p>
                <button className='border-2 rounded-full px-3 py-1 uppercase text-sm cursor-pointer'>Add To Cart</button>
            </div>
        </div>
     </div>  
  )
}

export default Product