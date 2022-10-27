import { createContext, useState } from "react";

const CartContext = createContext({});
export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.some((item) => item.id === id);
  const addItem = (product, quantity) => {
    if (!isInCart(product.id)) {
      const item = {
        ...product,
        quantity,
      };
      setCart([...cart, item]);
    } else {
      const itemIndex = cart.findIndex((item) => item.id === product.id);
      const itemDraft = { ...cart[itemIndex] };
      itemDraft.quantity = itemDraft.quantity + quantity;
      const cartDraft = [...cart];
      cartDraft[itemIndex] = itemDraft;
      setCart(cartDraft);
    }
  };
  const removeItem = (itemId) => {
    const cartDraft = cart.filter((item) => item.id !== itemId);
    setCart(cartDraft);
  };
  const clear = () => {
    setCart([]);
  };
  const total = cart.reduce(
    (count, item) => count + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  // Contexto usado para el manejo del carrito, proceso aprendido en clase, a traves del contenido compartido "cart" "addItem" "removeItem".... se puede administrar los procesos del carrito y manejar los datos en multiples componentes
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        total,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
