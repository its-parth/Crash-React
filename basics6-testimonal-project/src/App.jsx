import { useState } from 'react';
import './App.css'
import Testimonal from './components/Testimonal'
import reviews from './data'

function App() {
  const [review, setReview] = useState(reviews[0]);
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const prevReviewHandler = (id) => {
    let newId = id - 1;
    if(newId == 0) newId = 5;
    setReview(reviews[newId-1]);
  }
  const nextReviewHandler = (id) => {
    let newId = id + 1;
    if(newId == 6) newId = 1;
    setReview(reviews[newId-1]);
  }
  const surpriseMehandler = (id) => {
    let rid = getRandomInt(1, reviews.length);
    while(rid == id) rid = getRandomInt(1, reviews.length);
    setReview(reviews[rid-1]);
  }
  return (
    <div className='main-wrapper bg-gray-200 w-screen h-screen flex justify-center items-center'>
      <Testimonal review={review} prevReviewHandler={prevReviewHandler} nextReviewHandler={nextReviewHandler} surpriseMehandler={surpriseMehandler} />
    </div>
  )
}

export default App
