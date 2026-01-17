import { useState } from "react";

function Product(props) {
    let {date, title} = props.product;
    date = new Date(date);
    const day = String(date.getDate());
    const month = String(date.getMonth()+1);
    const year = date.getFullYear();
    const [newTitle, setTitle] = useState(title);
    const btnHandler = () => {
        setTitle("Popcorn");
    }
    return <div className="bg-sky-500 flex justify-around items-center border-2">
        <p className="bg-yellow-300 border-4 rounded-xl p-4 m-2">{day}/{month}/{year}</p>
        <p className="text-lg font-bold text-red-800 w-20">{newTitle}</p>
        <button className="border-3 rounded-xl bg-amber-600 p-2" onClick={btnHandler}>Add to Cart</button>
    </div>
}
export default Product;