import React from 'react'

const Card = ({post}) => {
    const {title, author, date, category, tags, content, id} = post;
  return (
    <div className='flex flex-col gap-1 border-b pb-4 pt-2'>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='italic pt-2'>By {author} on <span className='font-semibold underline not-italic'>{category}</span></p>
        <p className='pb-3'>Posted On {date}</p>
        <p>{content}</p>
        <div className='flex gap-2 text-blue-700 font-semibold text-sm underline'>
            {
                tags.map((tag, ind) => {
                    return <span key={ind}>#{tag}</span>
                })
            }
        </div>
    </div>
  )
}

export default Card