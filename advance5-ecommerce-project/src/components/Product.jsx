import React from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/slices/cartSlice'
import { selectIsInCart } from '../redux/slices/cartSlice'
const Product = ({ product }) => {
    const dispatch = useDispatch();
    const isInCart = useSelector((state) => {
        return selectIsInCart(state, product.id)
    })
    return (
        <div className='hover:scale-110 duration-300 shadow-xl/20 hover:shadow-xl/40 rounded-lg inset-shadow-sm/10 hover:inset-shadow-sm/30 group'>
            <div className='flex flex-col w-90 md:w-70 py-4 px-6 items-center gap-4 justify-between h-full'>
                <h2 className='font-bold text-lg truncate w-45 text-gray-700'>{product.title}</h2>
                <p className='text-center text-sm w-45 text-gray-400'>{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                <img className='h-45' src={product.image} alt="product-img" />

                <div className='w-full flex justify-between items-center mt-3'>
                    <p className='text-green-500 font-bold'>&#36;{product.price}</p>
                    {
                        isInCart ?
                            <button onClick={() => {
                                dispatch(removeFromCart(product));
                                toast.error('Item Removed From Cart!')
                            }} className='border-2 font-bold duration-500 rounded-full px-3 py-1 uppercase text-sm cursor-pointer group-hover:text-white group-hover:bg-gray-900'>Remove From Cart</button>
                            :
                            <button onClick={() => {
                                dispatch(addToCart(product));
                                toast.success('Item Added To Cart!')
                            }} className='border-2 font-bold duration-500 rounded-full px-3 py-1 uppercase text-sm cursor-pointer group-hover:text-white group-hover:bg-gray-900'>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product