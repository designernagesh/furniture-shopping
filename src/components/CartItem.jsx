function CartItem({ product, quantity, changeQuantityCart }) {
    return (
        <div className="item" data-id={product.id}>
            <div className="image">
                <img src={`/images/${product.image}`} alt={product.name} />
            </div>
            <div className="name">{product.name}</div>
            <div className="totalPrice">${product.price * quantity}</div>
            <div className="quantity">
                <span className="minus" onClick={() => changeQuantityCart(product.id, 'minus')}>-</span>
                <span>{quantity}</span>
                <span className="plus" onClick={() => changeQuantityCart(product.id, 'plus')}>+</span>
            </div>
        </div>
    )
}

export default CartItem;
