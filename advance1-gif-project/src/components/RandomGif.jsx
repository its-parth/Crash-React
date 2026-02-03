import Loader from './Loader ';
import useGif from '../hooks/useGif';

const RandomGif = () => {
    const {gifURL, fetchData, isLoadingGif} = useGif();
    const generateGifHandler = () => {
        fetchData();
    }
  return (
    <div className='w-3/6 bg-green-300 rounded-lg flex flex-col gap-3 items-center my-3 border py-4'>
        <h2 className='uppercase font-bold'>A Random Gif</h2>
        <div className="random-gif max-w-4/6 w-full flex justify-center">{
            isLoadingGif ? 
            <div className='max-w-full flex justify-center'><Loader /></div>
            :
            <img className='max-w-full' src={gifURL} alt="gif-img" />
        }
        </div>
        <button onClick={generateGifHandler} className='bg-green-200 max-w-lg rounded-lg py-2 w-5/6 cursor-pointer'>Generate</button>
    </div>
  )
}

export default RandomGif