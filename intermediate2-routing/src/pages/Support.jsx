import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    const btnHandler = () => {
        navigate('/about');
    }
    const backHandler = () => {
        navigate(-1);
    }
  return (
    <div>
        <div>Support</div>
        <button onClick={btnHandler}>Go to about page</button>
        <button onClick={backHandler}>Go back</button>
    </div>
  )
}

export default Support