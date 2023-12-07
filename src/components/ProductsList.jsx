import SingleProduct from "./SingleProduct";

function ProductsList({ products, addToCart }) {
    return (
        <div className="listProduct">
            {products.map(product => (
                <SingleProduct key={product.id} item={product} addToCart={addToCart} />
            ))}
        </div>
    )
}

export default ProductsList
