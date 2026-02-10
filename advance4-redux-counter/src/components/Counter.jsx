import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <br />
            <div>{value}</div>
            <br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter