import { createContext ,useState, useEffect } from "react";

export const CartDataContext = createContext();

const CartContext = ({children}) => {
const [cart, setCart] = useState(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  return savedCart || [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (funkos) => {
  const funkoInCart = cart.find((item) => item.id === funkos.id);
  if (funkoInCart) {
    const updatedCart = cart.map((item) =>
      item.id === funkos.id ? { ...item, buyTotal: item.buyTotal + funkos.buyTotal} : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart,funkos])
  }
};

  const removeFromCart = (funkoID) => {
    const newCart = cart.filter((funkos) => funkos.id !== funkoID);
    setCart(newCart);
  };

  const cartPriceTotal= ()=>{
    return cart.reduce((total, funkos) => total + (funkos.price * funkos.buyTotal), 0);
  }

  const clearCart= ()=>{
    setCart([])
  }

  return (
    <CartDataContext.Provider value={{cart, setCart, removeFromCart, addToCart, clearCart, cartPriceTotal}}>
      {children}
    </CartDataContext.Provider>
  )
}

export default CartContext