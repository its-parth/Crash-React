import { useState } from "react";
const Card = (props) => {
    const {removeTour} = props;
    const {id, name, info, price, image} = props.tour;
    const [isReadMore, setReadMore] = useState(false);
    const description = isReadMore ? info : `${info.substr(0, 200)}....`;
    function notInterestedHandler() {
        removeTour(id);
    }
    return (
        <div className="card-container w-80 flex flex-col items-center p-4 gap-2 shadow-xl/30 rounded-xl">
            <img className="w-75 h-75 object-cover" src={image} alt="tour-img" />
            <p className="price w-full text-lg font-extrabold text-green-400">&#8377;{price}</p>
            <p className="title w-full font-extrabold text-xl">{name}</p>
            <p className="description">{description}
            <span className="text-sky-400 cursor-pointer" onClick={() => {setReadMore(prev => !prev);}}>
                {
                    isReadMore ? 'Show Less' : 'Read More'
                }
            </span>
            </p>
            <button onClick={notInterestedHandler} className="not-interested-btn font-bold bg-red-200 px-10 py-2 border-2 border-red-500 rounded-xl my-2 cursor-pointer">Not Interested</button>
        </div>
    )
}

export default Card;