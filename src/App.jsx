import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Fetch products
    const fetchData = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (item) => item.product_id === productId
    );

    if (index === -1) {
      updatedCart.push({ product_id: productId, quantity: 1 });
    } else {
      updatedCart[index].quantity += 1;
    }

    setCart(updatedCart);
    addCartToMemory(updatedCart);
  };

  const addCartToMemory = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const changeQuantityCart = (productId, type) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (item) => item.product_id === productId
    );

    if (index !== -1) {
      switch (type) {
        case "plus":
          updatedCart[index].quantity += 1;
          break;

        default:
          const updatedQuantity = updatedCart[index].quantity - 1;
          if (updatedQuantity > 0) {
            updatedCart[index].quantity = updatedQuantity;
          } else {
            updatedCart.splice(index, 1);
          }
          break;
      }
    }

    setCart(updatedCart);
    addCartToMemory(updatedCart);
  };

  const toggleCart = () => {
    setShowCart((prevShowCart) => {
      const newShowCart = !prevShowCart;

      // Add or remove the class from the body
      if (newShowCart) {
        document.body.classList.add('showCart');
      } else {
        document.body.classList.remove('showCart');
      }

      return newShowCart;
    });    
  };

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.product_id);
    return total + product.price * item.quantity;
  }, 0);

  return (
    <>
      <div className='container'>
        <Header toggleCart={toggleCart} cartQuantity={cartQuantity} />
        <ProductsList products={products} addToCart={addToCart} />
      </div>
      <div className='cartTab'>
        <Cart cart={cart} totalPrice={totalPrice} products={products} changeQuantityCart={changeQuantityCart} toggleCart={toggleCart} />
      </div>
    </>
  );
}

export default App;
