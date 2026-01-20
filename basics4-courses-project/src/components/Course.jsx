import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';

const Course = (props) => {
    const {course} = props;
    const {id, title, image, description} = course;
    const [liked, setLiked] = useState(false);
    const likeBtnHandler = () => {
        liked ? toast.warning('Disliked!') : toast.success('Liked');
        setLiked(prev => !prev)
    }
    return (
        <div className='course-card w-70 rounded-xl bg-gray-900 p-2 flex flex-col gap-2 relative'>
            <img src={image.url} alt={image.alt} />
            <p className='course-title font-bold text-xl'>{title}</p>
            <p className="course-desc">{description.substr(0, 120)}...</p>
            <div onClick={likeBtnHandler} className='like-btn bg-white w-min p-1.5 rounded-full flex jstify-center items-center absolute right-2 top-35'>
                {
                liked ? <FaHeart className='text-xl text-red-500'/> : <FaHeart className='text-xl text-red-200'/>
                }
            </div>
        </div>
    )
}

export default Course;
