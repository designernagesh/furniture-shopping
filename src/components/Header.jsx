import { FaCartShopping } from "react-icons/fa6";

function Header({ toggleCart, cartQuantity }) {
    return (
        <header>
            <div className="title">Furniture's</div>
            <div className="icon-cart" onClick={toggleCart}>
                <FaCartShopping />
                <span>{cartQuantity}</span>
            </div>
        </header>
    );
}

export default Header;
