import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { resetCart } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((acc, curr) => {
    return acc + curr.price
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='flex-1 flex'>
      {
        cartItems.length == 0 ?
          <div className='flex flex-col justify-center items-center gap-4 flex-1'>
            <div className='font-bold text-gray-800 text-2xl'>Your cart is empty!</div>
            <NavLink to={'/'}><div className='px-9 font-bold py-3 bg-green-600 text-white uppercase rounded-lg duration-300 hover:bg-white hover:text-green-600 border-2 border-green-600'>Shop Now</div></NavLink>
          </div>
          :
          <div className='flex lg:max-w-295 gap-6 md:mx-5 flex-col md:flex-row'>
            <div className='w-full md:w-7/12 p-4'>
              {
                cartItems.map((item, index) => {
                  return <CartItem className={
                    index !== cartItems.length - 1 ? "border-b-2" : ""
                  } key={item.id} item={item}/>
                })
              }
            </div>
            <div className='flex flex-col w-full md:w-5/12 justify-around px-4 mb-15 max-h-screen'>
              <div className='flex flex-col gap-5'>
                <div>
                  <p className='uppercase text-green-800 font-bold text-xl'>your cart</p>
                  <p className='uppercase text-green-700 font-bold text-5xl'>summary</p>
                </div>
                <p className='text-lg text-gray-700 font-bold'>Total Items: {cartItems.length}</p>
              </div>
              <div className='flex gap-4 flex-col'>
                <p className='text-lg font-bold text-gray-700'>Total Amount: <span className='text-black font-extrabold text-xl'>&#36;{totalAmount}</span></p>
                <div onClick={() => {
                  dispatch(resetCart());
                  navigate('/');
                  toast.success('Checkout Done ✅')
                }} className='text-white text-lg bg-green-700 rounded-lg flex justify-center items-center py-3 font-bold cursor-pointer duration-300 hover:bg-white hover:text-green-700 border-2 border-green-700'>Checkout Now</div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default CartPage