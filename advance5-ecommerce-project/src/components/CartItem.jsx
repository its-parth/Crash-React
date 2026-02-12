import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({item, className}) => {
    const dispatch = useDispatch();
  return (
    <div className={`${className} flex mt-5 py-8 px-4 border-b-gray-500 gap-5 md:gap-8`}>
        <div className='w-[30%] flex items-center sm:p-5 md:p-2 md:pt-4'>
            <img className="object-contain" src={item.image} alt="item-image" />
        </div>
        <div className="flex-col flex gap-5 py-7 w-[60%]">
            <p className="font-bold text-gray-800 text-xl">{item.title}</p>
            <p className="text-gray-700">{item.description.split(" ").slice(0, 15).join(" ")+"..."}</p>
            <div className="flex justify-between">
                <p className="text-green-600 font-bold text-lg">&#36;{item.price}</p>
                <div onClick={() => dispatch(removeFromCart(item))} className="rounded-full bg-red-200 p-2.5 cursor-pointer"><MdDelete className="text-red-900"/></div>
            </div>
        </div>
    </div>
  )
}

export default CartItem