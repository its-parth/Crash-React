import React from 'react'

const Course = (props) => {
    const {course} = props;
    const {id, title, image, description} = course;
    return (
        <div className='course-card w-70 rounded-xl bg-gray-900 p-2 flex flex-col gap-2'>
            <img src={image.url} alt={image.alt} />
            <p className='course-title font-bold text-xl'>{title}</p>
            <p className="course-desc">{description.substr(0, 120)}...</p>
        </div>
    )
}

export default Course;
