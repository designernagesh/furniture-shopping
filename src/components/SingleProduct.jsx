function SingleProduct({ item, addToCart }) {
    const { id, image, name, price } = item;

    return (
        <div key={id} className="item">
            <img src={`/images/${image}`} alt="" />
            <h2>{name}</h2>
            <div className="price">${price}/-</div>
            <button className="addCart" onClick={() => addToCart(id)}>
                Add To Cart
            </button>
        </div>
    )
}

export default SingleProduct
