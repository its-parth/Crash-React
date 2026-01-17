
const Counter = (props) => {
    const {count, setCount} = props;
    function incrementHandler() {
        setCount(c => c+1);
    }
    function decrementHandler() {
        // if(count == 0) {
        //     alert('value is already zero, can\'t decrease further!!');
        //     return;
        // }
        setCount(c => c-1);
    }
    return (
        <div className="counter-container flex gap-2 p-2 w-40 border-2 bg-white">
            <div onClick={decrementHandler} className="select-none p-2 flex-1 flex justify-center items-center font-bold text-2xl cursor-pointer">-</div>
            <div className="select-none border-x-2 flex-1 border-gray-400 p-2 px-3 flex justify-center items-center font-bold text-2xl ">{count}</div>
            <div onClick={incrementHandler} className="select-none p-2 flex-1 flex justify-center items-center font-bold text-2xl cursor-pointer">+</div>
        </div>
    )
}

export default Counter;