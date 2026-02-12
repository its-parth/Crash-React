import { useEffect, useState } from 'react'
import Product from '../components/Product'
import Loader from '../components/Loader';

const Home = ({loading, setLoading}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch {
        setProducts([]);
        setLoading(false);
      }
    }
    fetchData();
  }, [])
  return (
    <div className='flex-1 flex'>
      {
        loading ? 
        <div className='flex items-center min-h-full'>
          <Loader />
        </div>
        :
        <div className='w-screen flex justify-center'>
          <div className="products-container w-full max-w-11/12 flex flex-wrap gap-6 sm:gap-6 py-8 justify-center px-1">
            {
              products.map(product => {
                return <Product key={product.id} product={product} />
              })
            }
          </div>
        </div>
      }

    </div>

  )
}

export default Home