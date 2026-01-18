import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    const {data} = props;
    const [tours, setTours] = useState(data);
    const removeTour = (tourId) => {
        const newTours = tours.filter(tour => tour.id != tourId);
        setTours(newTours);
    }
    return (
        (tours.length == 0) ? 
        <div className="h-full w-screen flex flex-col justify-center items-center gap-2">
            <h2 className="font-extrabold text-xl">No Tours Left</h2>
            <button className="bg-gray-300 px-8 py-2 cursor-pointer" onClick={() => setTours(data)}>Refresh</button>
        </div> 
        :
        <div className="tours-container flex flex-wrap justify-center items-start gap-4">
            {
                tours.map((tour) => {
                    return <Card key={tour.id} tour={tour} removeTour={removeTour}/>
                })
            }
        </div>
    )
}

export default Cards;