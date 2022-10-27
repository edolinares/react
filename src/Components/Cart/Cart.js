import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createOrder } from "../../Utils/Orders";
import { OrderModal } from "../OrderModal/OrderModal";


export const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
 // const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  };
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: 1,
      items: cart,
      total,
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  };
  // verificamos si el hay elementos en el acarrito
  const showTable = cart.length > 0;

  return (
    <div className="cartContainer">
      <h1 className="cartTitle">Carrito</h1>
      {/* Si hay elementos en el carrito mostramos: */}
      {showTable && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <FaTrashAlt onClick={() => handleRemove(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: $ {total}</h3>
          <button variant="success" onClick={handleOpen}>
            Finalizar compra
          </button>
        </div>
      )}
      {!showTable && (
        <>
          <h3 className="cartEmpty">Carrito de compra vacio</h3>
          <Link to="/">
            <button variant="success">Ir a Inicio</button>
          </Link>
        </>
      )}
      <OrderModal

        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </div>
  );
};
