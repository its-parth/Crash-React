import React, { useContext } from 'react'
import Loader from './Loader'
import Card from './Card'
import { AppContext } from '../context/AppContext';
const Blogs = () => {
    const {posts, isLoading} = useContext(AppContext);
    return (
    <div className='flex justify-center items-center w-162.5 min-h-full pt-2 pb-3'>
        {
            isLoading ? 
            <Loader />
            : 
            <>
            <div className='flex flex-col'>
                {
                    posts.map(post => {
                        return <Card key={post.id} post={post}/>
                    })
                }
            </div>
            </>
        }
    </div>
  )
}

export default Blogs