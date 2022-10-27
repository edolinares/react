import { createContext, useState } from "react";



const CartContext = createContext({});
export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //const [buyer,setbuyer] = useState("Fran");


  // revisamos si el id del producto ya esta en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);
  // proceso para agregar elementos al carrito:
  const addItem = (product, quantity) => {
    //si el id del producto no esta, lo agregamos
    if (!isInCart(product.id)) {
      const item = {
        ...product,
        quantity,
      };
      setCart([...cart, item]);
    } else {
      //si el id del esta, lo sumamos la cantidad
      const itemIndex = cart.findIndex((item) => item.id === product.id);
      // Mediante Borradores creamos un nuevo array que al final se sube al array oficial para evitar mutacion
      const itemDraft = { ...cart[itemIndex] };
      itemDraft.quantity = itemDraft.quantity + quantity;
      const cartDraft = [...cart];
      cartDraft[itemIndex] = itemDraft;
      setCart(cartDraft);
    }
  };
  // proceso para borrar el elemento seleccionado del carrito
  const removeItem = (itemId) => {
    const cartDraft = cart.filter((item) => item.id !== itemId);
    setCart(cartDraft);
  };
  // proceso para borrar el carrito por completo
  const clear = () => {
    setCart([]);
  };
  // calculo del gran total
  const total = cart.reduce(
    (count, item) => count + item.price * item.quantity,
    0
  );
  // calculo de total de items
  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

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
     //   buyer,
      //  setbuyer
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
