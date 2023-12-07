import CartItem from "./CartItem";

function Cart({ cart, products, changeQuantityCart, toggleCart, totalPrice }) {
    return (
        <>
            <h1>Shopping Cart</h1>
            <div className="listCart">
                {cart.length > 0 ? (
                    cart.map((item) => {
                        const product = products.find(
                            (product) => product.id === item.product_id
                        );
                        return (
                            <CartItem
                                key={item.product_id}
                                product={product}
                                quantity={item.quantity}
                                changeQuantityCart={changeQuantityCart}
                            />
                        );
                    })
                ) : (
                    <p className="cart-message">
                        <strong>No items in your cart.</strong> Enhance your experience by
                        adding products!
                    </p>
                )}
                {totalPrice > 0 && (
                    <div className="total-price">
                        Total Price: <strong>${totalPrice}</strong>
                    </div>
                )}
            </div>

            <div className="btn">
                <button className="close" onClick={toggleCart}>
                    CLOSE
                </button>
                <button className="checkOut">Check Out</button>
            </div>
        </>
    );
}

export default Cart;
