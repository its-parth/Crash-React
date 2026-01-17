import Product from "./Product";
function Products(props) {
    const {products} = props;
    return <div className="products-container bg-green-400 flex flex-col gap-4 w-lg p-4">
        {
            products.map((product) => <Product key={product.id} product={product} />)
        }
    </div>
}

export default Products;