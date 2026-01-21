import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Testimonal = ({ review, surpriseMehandler, prevReviewHandler, nextReviewHandler }) => {
    const { id, name, job, image, text } = review;
    return (
        <div className="testimonal-container w-xl relative flex flex-col items-center gap-10 select-none">
            <div className="heading flex flex-col items-center">
                <h2 className="font-bold text-3xl">Our Testimonials</h2>
                <div className="bg-violet-500 h-1 rounded-full w-4/6"></div>
            </div>
            <div className="review-card flex flex-col justify-center w-full bg-white relative items-center p-6 gap-3">
                <div className="absolute left-5 -top-15">
                    <div className="bg-violet-500 w-25 h-25 rounded-full relative">
                        <img className="w-25 rounded-full absolute right-1.5 top-1" src={image} alt="user-img" />
                    </div>
                </div>
                <div className="reviewer-info mt-4 flex flex-col items-center">
                    <h3 className="review-name font-bold text-xl">{name}</h3>
                    <p className="job-role text-purple-400 text-sm">{job}</p>
                </div>
                <ImQuotesLeft className="text-purple-400" />
                <div className="review-text text-center text-sm select-none">{text}</div>
                <ImQuotesRight className="text-purple-400" />
                <div className="flex gap-5 mt-3 mb-2">
                    <div onClick={() => prevReviewHandler(id)} className="prev-btn text-purple-400 cursor-pointer"><GrPrevious />
                    </div>
                    <div onClick={() => nextReviewHandler(id)} className="next-btn text-purple-400 cursor-pointer"><GrNext />
                    </div>
                </div>
                <div onClick={() => surpriseMehandler()} className="surprise-me-btn bg-violet-400 text-white px-6 py-1 rounded-sm font-bold text-sm cursor-pointer select-none">Surprise Me</div>
            </div>
        </div>
    )
}

export default Testimonal;