import { products } from '../data'
import Product from '../components/Product'

const Home = () => {
  
  return (
    <div className='w-screen flex justify-center'>
      <div className="products-container w-full max-w-11/12 flex flex-wrap gap-6 sm:gap-6 py-8 justify-center px-1">
          {
            products.map(product => {
              return <Product key={product.id} product={product} />
            })
          }
      </div>
    </div>
  )
}

export default Home